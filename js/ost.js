let ost = [];

function showSkeleton() {
    const grid = document.getElementById('ost-grid');
    grid.innerHTML = Array(12).fill(0).map(() => `
        <div class="skeleton-card">
            <div class="skeleton-content">
                <div class="skeleton skeleton-title"></div>
                <div class="skeleton skeleton-text"></div>
            </div>
        </div>
    `).join('');
}

async function loadOST() {
    showSkeleton();
    const res = await fetch('../json/ost.json');
    ost = await res.json();
    renderOST(ost);
}

function renderOST(data) {
    const grid = document.getElementById('ost-grid');
    grid.innerHTML = data.map((track, idx) => `
        <div class="card">
            <div class="card-content">
                <div class="card-tags">${track.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
                <audio controls preload="none" style="width: 100%; margin-top: 12px;" onplay="pauseOthers(this)">
                    <source src="../assets${track.path}" type="audio/mpeg">
                </audio>
            </div>
        </div>
    `).join('');
}

function pauseOthers(current) {
    document.querySelectorAll('audio').forEach(audio => {
        if (audio !== current) audio.pause();
    });
}

let searchTimeout;

document.getElementById('ost-search').addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        const query = e.target.value.toLowerCase();
        const filtered = ost.filter(track => 
            track.tags.some(tag => tag.toLowerCase().includes(query))
        );
        renderOST(filtered);
    }, 300);
});

loadOST();
