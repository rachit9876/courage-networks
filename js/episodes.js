(() => {
  const grid = document.getElementById('episodes-grid');
  const search = document.getElementById('episode-search');
  let episodes = [];

  function renderEpisodes(data) {
    if (!grid) return;
    if (!data.length) {
      window.CN.renderEmptyState(grid, 'No matching episodes found.');
      return;
    }

    grid.innerHTML = data.map((episode) => `
      <article class="card" data-episode-id="${window.CN.escapeHTML(episode.id)}" tabindex="0">
        <div class="card-content">
          <h3 class="card-title">${window.CN.escapeHTML(episode.name)}</h3>
          <p class="card-meta">Season ${window.CN.escapeHTML(episode.season)} &bull; Episode ${window.CN.escapeHTML(episode.episode)} &bull; ${window.CN.escapeHTML(episode.airdate)}</p>
          <p class="card-summary">${window.CN.escapeHTML(window.CN.stripHTML(episode.summary))}</p>
        </div>
      </article>
    `).join('');
  }

  function openEpisode(id) {
    const episode = episodes.find((item) => item.id === id);
    if (!episode || !window.CNModal?.open) return;

    window.CNModal.open(`
      <h2 class="modal-title">${window.CN.escapeHTML(episode.name)}</h2>
      <p class="modal-meta">Season ${window.CN.escapeHTML(episode.season)} &bull; Episode ${window.CN.escapeHTML(episode.episode)} &bull; Aired: ${window.CN.escapeHTML(episode.airdate)}</p>
      <div class="modal-description">${episode.summary}</div>
    `);
  }

  async function init() {
    window.CN.renderSkeletonCards(grid, 12, { lines: 2 });
    episodes = await window.CN.fetchJSON('../json/episodes.json');
    renderEpisodes(episodes);

    window.CN.bindSearch(
      search,
      () => episodes,
      (episode, query) => episode.name.toLowerCase().includes(query)
        || window.CN.stripHTML(episode.summary).toLowerCase().includes(query),
      renderEpisodes,
    );
  }

  grid?.addEventListener('click', (event) => {
    const card = event.target.closest('[data-episode-id]');
    if (card) openEpisode(card.dataset.episodeId);
  });

  grid?.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    const card = event.target.closest('[data-episode-id]');
    if (!card) return;
    event.preventDefault();
    openEpisode(card.dataset.episodeId);
  });

  init().catch(() => window.CN.renderEmptyState(grid, 'Episodes could not be loaded.'));
})();
