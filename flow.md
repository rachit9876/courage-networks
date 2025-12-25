```mermaid
flowchart TD
    %% =========================================================
    %% ACTOR
    %% =========================================================
    User["End User<br/>Browser (Desktop / Mobile)"]

    %% =========================================================
    %% CLIENT-SIDE
    %% =========================================================
    subgraph Client["Client Runtime (Browser)"]
        HTML["index.html<br/>Static UI"]
        CSS["style.css<br/>Theme + layout"]
        # Courage Networks — Project Flow (Static Site)

        This project is a static HTML/CSS/JS site. There is **no backend** and no server-side API. Each feature page loads its data from JSON files in the `json/` folder and renders cards in the browser.

        ## High-level navigation

        ```mermaid
        flowchart TD
            U[User Browser]
            U --> I[index.html]

            I --> G[pages/gallery.html]
            I --> O[pages/ost.html]
            I --> E[pages/episodes.html]
            I --> C[pages/cookbook.html]

            G -->|fetch| JG[json/gallery.json]
            O -->|fetch| JO[json/ost.json]
            E -->|fetch| JE[json/episodes.json]
            C -->|fetch| JC[json/cookbook.json]
        ```

        ## Shared UI runtime

        Two shared scripts provide common UI elements on inner pages:

        - `js/components.js`
            - Mounts the top app bar into `#app-bar-mount`.
            - Injects the modal container into `#modal-mount` (when present).
        - `js/ui.js`
            - Provides the modal controller (`window.CNModal`) used by pages that open details.

        Inner pages typically include:

        1. `../js/components.js`
        2. `../js/ui.js` (if the page uses the modal)
        3. A page-specific script (e.g. `../js/gallery.js`)

        ## Gallery (formerly “Characters”)

        **Goal:** Show all images from `assets/char/` using a single source of truth JSON.

        ### Data source

        - `json/gallery.json`
            - Array of objects:
                - `name` (display title)
                - `imageName` (path like `assets/char/<fileName>.<ext>`)

        ### Assets

        - `assets/char/`
            - Contains all images referenced by `json/gallery.json`.
            - Filenames are **lower camelCase** (e.g. `aiShen.webp`, `beardedManCharacter.webp`).

        ### Runtime flow

        ```mermaid
        sequenceDiagram
            participant U as User
            participant P as pages/gallery.html
            participant S as js/gallery.js
            participant D as json/gallery.json
            participant A as assets/char/*

            U->>P: Open Gallery page
            P->>S: Load scripts (components/ui/page script)
            S->>D: fetch('../json/gallery.json')
            D-->>S: JSON array
            S->>P: Render cards into #gallery-grid
            P->>A: Browser loads images via <img src="../assets/char/...">
            U->>S: Click a card
            S->>P: Open modal with selected image
        ```

        ### Important implementation detail

        `js/gallery.js` opens the modal by **imageName** (not by display name) so the modal works even if multiple items share the same `name`.

        ### Adding a new gallery image

        1. Put the image file in `assets/char/` using **camelCase**.
        2. Add an entry to `json/gallery.json`:

             - `name`: what you want to display
             - `imageName`: `assets/char/<yourFileName>`

        ## OST

        **Goal:** Render audio players from a JSON list.

        ### Data source

        - `json/ost.json`
            - Array of tracks:
                - `tags`: array of strings (used for search)
                - `path`: string like `/ost/<fileName>.mp3`

        ### Assets

        - `assets/ost/`
            - Contains all MP3 files.
            - Filenames are **lower camelCase** (e.g. `kingRamses.mp3`, `panicOriginal.mp3`).

        ### Runtime flow

        ```mermaid
        sequenceDiagram
            participant U as User
            participant P as pages/ost.html
            participant S as js/ost.js
            participant D as json/ost.json
            participant A as assets/ost/*

            U->>P: Open OST page
            P->>S: Load scripts
            S->>D: fetch('../json/ost.json')
            D-->>S: JSON array
            S->>P: Render <audio> cards in #ost-grid
            P->>A: Browser loads audio via <source src="../assets" + track.path>
            U->>S: Play one audio
            S->>S: pauseOthers() pauses other players
        ```

        ### Adding a new track

        1. Put the MP3 in `assets/ost/` using **camelCase**.
        2. Add a new entry in `json/ost.json`:
             - `path`: `/ost/<fileName>.mp3`
             - `tags`: include searchable keywords

        ## Episodes & Cookbook

        These are similar patterns:

        - A page under `pages/` loads a corresponding script under `js/`.
        - The script fetches JSON from `json/` and renders cards.

        Files:

        - `pages/episodes.html` + `js/episodes.js` + `json/episodes.json`
        - `pages/cookbook.html` + `js/cookbook.js` + `json/cookbook.json`

        ## Naming conventions (current repo)

        - **Image assets:** `assets/char/<lowerCamelCase>.(webp|gif)`
        - **Audio assets:** `assets/ost/<lowerCamelCase>.mp3`
        - **Data JSON:** lowercase filenames (e.g. `json/gallery.json`, `json/ost.json`)

        Why it matters (Linux + static hosting): paths are **case-sensitive**, so `OST.json` and `ost.json` are different files.

        ## Quick integrity checks

        Recommended checks after edits:

        - Every `imageName` in `json/gallery.json` exists in `assets/char/`.
        - Every `path` in `json/ost.json` exists in `assets/ost/`.
        - Grep for stale paths (e.g. old `/OST/` or `assets/gallery/`).