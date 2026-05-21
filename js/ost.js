(() => {
  const grid = document.getElementById('ost-grid');
  const search = document.getElementById('ost-search');
  let ost = [];

  function renderOST(data) {
    if (!grid) return;
    if (!data.length) {
      window.CN.renderEmptyState(grid, 'No matching tracks found.');
      return;
    }

    grid.innerHTML = data.map((track) => `
      <article class="card">
        <div class="card-content">
          <div class="card-tags">
            ${track.tags.map((tag) => `<span class="tag">${window.CN.escapeHTML(tag)}</span>`).join('')}
          </div>
          <audio controls preload="none" class="audio-player">
            <source src="../assets${window.CN.escapeHTML(track.path)}" type="audio/mpeg">
          </audio>
        </div>
      </article>
    `).join('');
  }

  function pauseOtherTracks(current) {
    document.querySelectorAll('audio').forEach((audio) => {
      if (audio !== current) audio.pause();
    });
  }

  async function init() {
    window.CN.renderSkeletonCards(grid, 12, { lines: 1 });
    ost = await window.CN.fetchJSON('../json/ost.json');
    renderOST(ost);

    window.CN.bindSearch(
      search,
      () => ost,
      (track, query) => track.tags.some((tag) => tag.toLowerCase().includes(query)),
      renderOST,
    );
  }

  grid?.addEventListener('play', (event) => {
    if (event.target.matches('audio')) pauseOtherTracks(event.target);
  }, true);

  init().catch(() => window.CN.renderEmptyState(grid, 'Soundtrack could not be loaded.'));
})();
