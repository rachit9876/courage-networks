let episodes = [];

function showSkeleton() {
    const grid = document.getElementById('episodes-grid');
    grid.innerHTML = Array(12).fill(0).map(() => `
        <div class="skeleton-card">
            <div class="skeleton-content">
                <div class="skeleton skeleton-title"></div>
                <div class="skeleton skeleton-text"></div>
                <div class="skeleton skeleton-text"></div>
            </div>
        </div>
    `).join('');
}

async function loadEpisodes() {
    showSkeleton();
    const res = await fetch('../json/episodes.json');
    episodes = await res.json();
    renderEpisodes(episodes);
}

function renderEpisodes(data) {
    const grid = document.getElementById('episodes-grid');
    grid.innerHTML = data.map(ep => `
        <div class="card" onclick="showModal('${ep.id}')">
            <div class="card-content">
                <div class="card-title">${ep.name}</div>
                <div class="card-meta">Season ${ep.season} • Episode ${ep.episode} • ${ep.airdate}</div>
                <div class="card-summary">${ep.summary.replace(/<[^>]*>/g, '')}</div>
            </div>
        </div>
    `).join('');
}

function showModal(id) {
    const episode = episodes.find(ep => ep.id === id);
    if (!episode) return;

    const html = `
        <h2 class="modal-title">${episode.name}</h2>
        <div class="modal-meta">Season ${episode.season} • Episode ${episode.episode} • Aired: ${episode.airdate}</div>
        <div class="modal-description">${episode.summary}</div>
    `;

    if (window.CNModal?.open) window.CNModal.open(html);
}

document.getElementById('episode-search').addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = episodes.filter(ep => 
        ep.name.toLowerCase().includes(query) || 
        ep.summary.toLowerCase().includes(query)
    );
    renderEpisodes(filtered);
});

loadEpisodes();
