let cookbook = {};
let recipes = [];

function showSkeleton() {
    const grid = document.getElementById('recipe-grid');
    grid.innerHTML = Array(8).fill(0).map(() => `
        <div class="skeleton-card">
            <div class="skeleton-content">
                <div class="skeleton skeleton-title"></div>
                <div class="skeleton skeleton-text"></div>
                <div class="skeleton skeleton-text"></div>
            </div>
        </div>
    `).join('');
}

async function loadCookbook() {
    showSkeleton();
    const res = await fetch('../json/cookbook.json');
    cookbook = await res.json();
    recipes = cookbook.recipes;
    
    document.getElementById('cookbook-title').textContent = cookbook.title;
    document.getElementById('cookbook-subtitle').textContent = cookbook.subtitle;
    document.getElementById('cookbook-description').textContent = cookbook.description;
    
    renderRecipes(recipes);
}

function renderRecipes(data) {
    const grid = document.getElementById('recipe-grid');
    grid.innerHTML = data.map((recipe, index) => `
        <div class="card" onclick="showRecipe(${index})">
            <div class="card-content">
                <div class="card-title">${recipe.name}</div>
                <div class="card-meta">Episode: ${recipe.episode}</div>
                <div class="card-summary">${recipe.description}</div>
            </div>
        </div>
    `).join('');
}

function showRecipe(index) {
    const recipe = recipes[index];
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    
    modalBody.innerHTML = `
        <h2 class="modal-title">${recipe.name}</h2>
        <div class="modal-meta">Episode: ${recipe.episode}</div>
        <p style="margin-bottom: 24px; color: var(--md-sys-color-on-surface-variant);">${recipe.description}</p>
        
        <div style="display: flex; gap: 24px; margin-bottom: 24px; flex-wrap: wrap;">
            <div><strong>Servings:</strong> ${recipe.servings}</div>
            <div><strong>Prep:</strong> ${recipe.prep_time}</div>
            <div><strong>Cook:</strong> ${recipe.cook_time}</div>
        </div>
        
        <h3 style="color: var(--md-sys-color-primary); margin-bottom: 12px;">Ingredients</h3>
        <ul style="margin-bottom: 24px; line-height: 1.8;">
            ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
        </ul>
        
        <h3 style="color: var(--md-sys-color-primary); margin-bottom: 12px;">Instructions</h3>
        <ol style="margin-bottom: 24px; line-height: 1.8;">
            ${recipe.instructions.map(inst => `<li>${inst}</li>`).join('')}
        </ol>
        
        <div style="background: var(--md-sys-color-primary-container); padding: 16px; border-radius: 12px; color: var(--md-sys-color-on-primary-container);">
            <strong>Muriel's Tip:</strong> ${recipe.muriel_tip}
        </div>
    `;
    
    modal.classList.add('active');
    document.body.classList.add('modal-open');
}

document.getElementById('recipe-search').addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = recipes.filter(recipe => 
        recipe.name.toLowerCase().includes(query) || 
        recipe.description.toLowerCase().includes(query) ||
        recipe.episode.toLowerCase().includes(query)
    );
    renderRecipes(filtered);
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

loadCookbook();
