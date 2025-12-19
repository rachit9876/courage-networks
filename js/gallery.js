let gallery = [];

function showSkeleton() {
    const grid = document.getElementById('gallery-grid');
    grid.innerHTML = Array(12).fill(0).map(() => `
        <div class="skeleton-card">
            <div class="skeleton skeleton-image"></div>
            <div class="skeleton-content">
                <div class="skeleton skeleton-title"></div>
            </div>
        </div>
    `).join('');
}

async function loadGallery() {
    showSkeleton();
    const res = await fetch('../json/gallery.json');
    gallery = await res.json();
    renderGallery(gallery);
}

function renderGallery(data) {
    const grid = document.getElementById('gallery-grid');
    grid.innerHTML = data.map(item => `
        <div class="card gallery-card" onclick="showModalById('${item.id}')">
            <img src="../${item.Path}" alt="${item.Name}" class="card-image" loading="lazy" onerror="this.style.display='none'">
            <div class="card-content">
                <div class="card-title">${item.Name}</div>
            </div>
        </div>
    `).join('');
}

function showModalById(id) {
    const item = gallery.find(g => g.id === id);
    if (!item) return;
    
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    
    const details = item.Details
        .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
        .replace(/\n/g, '<br>')
        .replace(/\[([^\]]+)\]\(#([^)]+)\)/g, '<a href="#$2" onclick="event.preventDefault(); showModalById(\'$2\');">$1</a>')
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>');
    
    modalBody.innerHTML = `
        <img src="../${item.Path}" alt="${item.Name}" style="max-width: 100%; max-height: 300px; object-fit: contain; border-radius: 16px; margin-bottom: 24px;" loading="lazy" onerror="this.style.display='none'">
        <h2 class="modal-title">${item.Name}</h2>
        <div class="modal-description">${details}</div>
    `;
    
    modal.classList.add('active');
    document.body.classList.add('modal-open');
    window.location.hash = id;
}

document.getElementById('gallery-search').addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = gallery.filter(item => 
        item.Name.toLowerCase().includes(query) || 
        item.Details.toLowerCase().includes(query)
    );
    renderGallery(filtered);
});

document.querySelector('.modal-close').addEventListener('click', () => {
    document.getElementById('modal').classList.remove('active');
    document.body.classList.remove('modal-open');
});

document.getElementById('modal').addEventListener('click', (e) => {
    if (e.target.id === 'modal') {
        document.getElementById('modal').classList.remove('active');
        document.body.classList.remove('modal-open');
    }
});

loadGallery();

window.addEventListener('hashchange', () => {
    const hash = window.location.hash.substring(1);
    if (hash) showModalById(hash);
});

window.addEventListener('load', () => {
    const hash = window.location.hash.substring(1);
    if (hash) showModalById(hash);
});
