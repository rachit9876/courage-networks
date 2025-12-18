let characters = [];

async function loadCharacters() {
    const res = await fetch('../json/characters.json');
    characters = await res.json();
    renderCharacters(characters);
}

function renderCharacters(data) {
    const grid = document.getElementById('characters-grid');
    grid.innerHTML = data.map(char => `
        <div class="card character-card" onclick="showModal('${char.name.replace(/'/g, "\\'")}')">
            <img src="../${char.imageName}" alt="${char.name}" class="card-image" onerror="this.style.display='none'">
            <div class="card-content">
                <div class="card-title">${char.name}</div>
            </div>
        </div>
    `).join('');
}

function showModal(name) {
    const character = characters.find(char => char.name === name);
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    
    modalBody.innerHTML = `
        <img src="../${character.imageName}" alt="${character.name}" style="max-width: 100%; border-radius: 16px; margin-bottom: 24px;" onerror="this.style.display='none'">
        <h2 class="modal-title">${character.name}</h2>
    `;
    
    modal.classList.add('active');
    document.body.classList.add('modal-open');
}

document.getElementById('character-search').addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = characters.filter(char => 
        char.name.toLowerCase().includes(query)
    );
    renderCharacters(filtered);
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

loadCharacters();
