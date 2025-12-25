let characters = [];

function showSkeleton() {
    const grid = document.getElementById('characters-grid');
    grid.innerHTML = Array(12).fill(0).map(() => `
        <div class="skeleton-card">
            <div class="skeleton skeleton-image"></div>
            <div class="skeleton-content">
                <div class="skeleton skeleton-title"></div>
            </div>
        </div>
    `).join('');
}

async function loadCharacters() {
    showSkeleton();
    const res = await fetch('../json/characters.json');
    characters = await res.json();
    renderCharacters(characters);
}

function renderCharacters(data) {
    const grid = document.getElementById('characters-grid');
    grid.innerHTML = data.map(char => `
        <div class="card character-card" onclick="showModalByImage('${encodeURIComponent(char.imageName)}')">
            <img src="../${char.imageName}" alt="${char.name}" class="card-image" loading="lazy" onerror="this.style.display='none'">
            <div class="card-content">
                <div class="card-title">${char.name}</div>
            </div>
        </div>
    `).join('');
}

function showModalByImage(encodedImageName) {
    const imageName = decodeURIComponent(encodedImageName);
    const character = characters.find(char => char.imageName === imageName);
    if (!character) return;

    const html = `
        <img src="../${character.imageName}" alt="${character.name}" style="max-width: 100%; border-radius: 16px; margin-bottom: 24px;" loading="lazy" onerror="this.style.display='none'">
        <h2 class="modal-title">${character.name}</h2>
    `;

    if (window.CNModal?.open) window.CNModal.open(html);
}

document.getElementById('character-search').addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = characters.filter(char => 
        char.name.toLowerCase().includes(query)
    );
    renderCharacters(filtered);
});

loadCharacters();
