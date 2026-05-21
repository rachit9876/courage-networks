(() => {
  const grid = document.getElementById('gallery-grid');
  const search = document.getElementById('gallery-search');
  let gallery = [];

  function renderGallery(data) {
    if (!grid) return;
    if (!data.length) {
      window.CN.renderEmptyState(grid, 'No matching gallery items found.');
      return;
    }

    grid.innerHTML = data.map((item) => `
      <article class="card media-card" data-image-name="${window.CN.escapeHTML(item.imageName)}" tabindex="0">
        <img src="../${window.CN.escapeHTML(item.imageName)}" alt="${window.CN.escapeHTML(item.name)}" class="card-image" loading="lazy">
        <div class="card-content">
          <h3 class="card-title">${window.CN.escapeHTML(item.name)}</h3>
        </div>
      </article>
    `).join('');
  }

  function openImage(imageName) {
    const item = gallery.find((entry) => entry.imageName === imageName);
    if (!item || !window.CNModal?.open) return;

    window.CNModal.open(`
      <img src="../${window.CN.escapeHTML(item.imageName)}" alt="${window.CN.escapeHTML(item.name)}" class="modal-image" loading="lazy">
      <h2 class="modal-title">${window.CN.escapeHTML(item.name)}</h2>
    `);
  }

  async function init() {
    window.CN.renderSkeletonCards(grid, 12, { image: true, lines: 0 });
    gallery = await window.CN.fetchJSON('../json/gallery.json');
    renderGallery(gallery);

    window.CN.bindSearch(
      search,
      () => gallery,
      (item, query) => item.name.toLowerCase().includes(query),
      renderGallery,
    );
  }

  grid?.addEventListener('click', (event) => {
    const card = event.target.closest('[data-image-name]');
    if (card) openImage(card.dataset.imageName);
  });

  grid?.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    const card = event.target.closest('[data-image-name]');
    if (!card) return;
    event.preventDefault();
    openImage(card.dataset.imageName);
  });

  init().catch(() => window.CN.renderEmptyState(grid, 'Gallery could not be loaded.'));
})();
