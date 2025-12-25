```mermaid
flowchart TD
    %% Main Containers
    subgraph USER["User"]
        direction LR
        U_BROWSER["Browser"]
    end

    subgraph FRONTEND["Frontend Container"]
        direction TB
        FE_HTML["HTML Files"]
        FE_CSS["CSS (styles.css)"]
        FE_JS["JavaScript Modules"]
        
        subgraph FE_JS_SUB["JavaScript Modules"]
            FE_UI["ui.js<br>Modal & UI Controller"]
            FE_COMP["components.js<br>Nav/Modal Renderer"]
            FE_PAGES["Page-specific JS<br>episodes.js, gallery.js, etc."]
        end

        FE_ASSETS["Static Assets<br>Images (.webp, .gif), Audio, Icons"]
    end

    subgraph BACKEND["Backend/Data Container"]
        direction TB
        BE_JSON["JSON Data Files"]
        
        subgraph BE_JSON_SUB["JSON Files"]
            BE_EPISODES["episodes.json<br>53 episodes"]
            BE_CHARS["characters.json<br>Character gallery"]
            BE_GALLERY["gallery.json<br>Scene/art images"]
            BE_OST["ost.json<br>Soundtrack list"]
            BE_COOKBOOK["cookbook.json<br>Recipes"]
            BE_HOUSE["house.json<br>Farmhouse map"]
        end
        
        BE_EXTERNAL["External Links<br>Game, Research PDF, Video Player"]
    end

    %% Interactions
    USER -->|Requests| FRONTEND
    FRONTEND -->|Fetches| BACKEND
    FRONTEND -->|Links to| BE_EXTERNAL
    
    %% Internal Frontend Flow
    FE_HTML -->|Uses| FE_CSS
    FE_HTML -->|Loads & Calls| FE_JS
    
    FE_JS -->|Renders| FE_HTML
    FE_JS -->|Fetches| BE_JSON
    FE_JS -->|Plays| FE_ASSETS
    
    FE_COMP -->|Injects| FE_HTML
    FE_UI -->|Controls| FE_COMP
    
    FE_PAGES -->|Dynamic Content| FE_HTML
    
    %% Detailed Page Flows
    subgraph PAGE_FLOWS["Page-Specific Flows"]
        P_EPISODES["episodes.html<br>→ episodes.js<br>→ episodes.json"]
        P_GALLERY["gallery.html<br>→ gallery.js<br>→ gallery.json"]
        P_OST["ost.html<br>→ ost.js<br>→ ost.json"]
        P_CHARS["characters.html<br>→ characters.js<br>→ characters.json"]
        P_COOKBOOK["cookbook.html<br>→ cookbook.js<br>→ cookbook.json"]
        P_HOUSE["house.html<br>→ house.js<br>→ house.json"]
    end

    FE_HTML -->|Includes| PAGE_FLOWS
    PAGE_FLOWS -->|Fetches| BE_JSON_SUB
    
    %% Data Flow Details
    subgraph DATA_FLOW["Data Flow"]
        DF_FETCH["fetch() calls"]
        DF_RENDER["renderEpisodes()<br>renderGallery()<br>etc."]
        DF_MODAL["Modal display"]
    end
    
    FE_PAGES -->|Calls| DF_FETCH
    DF_FETCH -->|Gets| BE_JSON
    DF_FETCH -->|Returns to| DF_RENDER
    DF_RENDER -->|Updates| FE_HTML
    DF_RENDER -->|Triggers| DF_MODAL
    DF_MODAL -->|Uses| FE_UI
    ```