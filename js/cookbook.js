(() => {
  const grid = document.getElementById('recipe-grid');
  const search = document.getElementById('recipe-search');
  const title = document.getElementById('cookbook-title');
  const subtitle = document.getElementById('cookbook-subtitle');
  const description = document.getElementById('cookbook-description');
  let recipes = [];

  function renderRecipes(data) {
    if (!grid) return;
    if (!data.length) {
      window.CN.renderEmptyState(grid, 'No matching recipes found.');
      return;
    }

    grid.innerHTML = data.map((recipe) => `
      <article class="card" data-recipe-name="${window.CN.escapeHTML(recipe.name)}" tabindex="0">
        <div class="card-content">
          <h3 class="card-title">${window.CN.escapeHTML(recipe.name)}</h3>
          <p class="card-meta">Episode: ${window.CN.escapeHTML(recipe.episode)}</p>
          <p class="card-summary">${window.CN.escapeHTML(recipe.description)}</p>
        </div>
      </article>
    `).join('');
  }

  function openRecipe(name) {
    const recipe = recipes.find((item) => item.name === name);
    if (!recipe || !window.CNModal?.open) return;

    window.CNModal.open(`
      <h2 class="modal-title">${window.CN.escapeHTML(recipe.name)}</h2>
      <p class="modal-meta">Episode: ${window.CN.escapeHTML(recipe.episode)}</p>
      <p class="modal-description">${window.CN.escapeHTML(recipe.description)}</p>

      <dl class="recipe-stats">
        <div><dt>Servings</dt><dd>${window.CN.escapeHTML(recipe.servings)}</dd></div>
        <div><dt>Prep</dt><dd>${window.CN.escapeHTML(recipe.prep_time)}</dd></div>
        <div><dt>Cook</dt><dd>${window.CN.escapeHTML(recipe.cook_time)}</dd></div>
      </dl>

      <h3 class="modal-section-title">Ingredients</h3>
      <ul class="modal-list">
        ${recipe.ingredients.map((item) => `<li>${window.CN.escapeHTML(item)}</li>`).join('')}
      </ul>

      <h3 class="modal-section-title">Instructions</h3>
      <ol class="modal-list">
        ${recipe.instructions.map((item) => `<li>${window.CN.escapeHTML(item)}</li>`).join('')}
      </ol>

      <aside class="tip-card">
        <strong>Muriel's Tip:</strong> ${window.CN.escapeHTML(recipe.muriel_tip)}
      </aside>
    `);
  }

  async function init() {
    window.CN.renderSkeletonCards(grid, 8, { lines: 2 });
    const cookbook = await window.CN.fetchJSON('../json/cookbook.json');
    recipes = cookbook.recipes || [];

    if (title) title.textContent = cookbook.title || '';
    if (subtitle) subtitle.textContent = cookbook.subtitle || '';
    if (description) description.textContent = cookbook.description || '';

    renderRecipes(recipes);

    window.CN.bindSearch(
      search,
      () => recipes,
      (recipe, query) => recipe.name.toLowerCase().includes(query)
        || recipe.description.toLowerCase().includes(query)
        || recipe.episode.toLowerCase().includes(query),
      renderRecipes,
    );
  }

  grid?.addEventListener('click', (event) => {
    const card = event.target.closest('[data-recipe-name]');
    if (card) openRecipe(card.dataset.recipeName);
  });

  grid?.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    const card = event.target.closest('[data-recipe-name]');
    if (!card) return;
    event.preventDefault();
    openRecipe(card.dataset.recipeName);
  });

  init().catch(() => window.CN.renderEmptyState(grid, 'Cookbook could not be loaded.'));
})();
