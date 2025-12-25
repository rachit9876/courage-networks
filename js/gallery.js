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
        <div class="card character-card" onclick="showModalByImage('${encodeURIComponent(item.imageName)}')">
            <img src="../${item.imageName}" alt="${item.name}" class="card-image" loading="lazy" onerror="this.style.display='none'">
            <div class="card-content">
                <div class="card-title">${item.name}</div>
            </div>
        </div>
    `).join('');
}

function showModalByImage(encodedImageName) {
    const imageName = decodeURIComponent(encodedImageName);
    const item = gallery.find(item => item.imageName === imageName);
    if (!item) return;

    const html = `
        <img src="../${item.imageName}" alt="${item.name}" style="max-width: 100%; border-radius: 16px; margin-bottom: 24px;" loading="lazy" onerror="this.style.display='none'">
        <h2 class="modal-title">${item.name}</h2>
    `;

    if (window.CNModal?.open) window.CNModal.open(html);
}

document.getElementById('gallery-search').addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = gallery.filter(item => 
        item.name.toLowerCase().includes(query)
    );
    renderGallery(filtered);
});

loadGallery();
