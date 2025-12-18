let gallery = [];

async function loadGallery() {
    const res = await fetch('../json/gallery.json');
    gallery = await res.json();
    renderGallery(gallery);
}

function renderGallery(data) {
    const grid = document.getElementById('gallery-grid');
    grid.innerHTML = data.map(item => `
        <div class="card gallery-card" onclick="showModal('${item.Name.replace(/'/g, "\\'")}')">
            <img src="../${item.Path}" alt="${item.Name}" class="card-image" onerror="this.style.display='none'">
            <div class="card-content">
                <div class="card-title">${item.Name}</div>
            </div>
        </div>
    `).join('');
}

function showModal(name) {
    const item = gallery.find(g => g.Name === name);
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    
    const details = item.Details.replace(/# /g, '<br>• ').replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
    
    modalBody.innerHTML = `
        <img src="../${item.Path}" alt="${item.Name}" style="max-width: 100%; border-radius: 16px; margin-bottom: 24px;" onerror="this.style.display='none'">
        <h2 class="modal-title">${item.Name}</h2>
        <div class="modal-description">${details}</div>
    `;
    
    modal.classList.add('active');
    document.body.classList.add('modal-open');
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
