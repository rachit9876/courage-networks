(() => {
  const escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };

  function escapeHTML(value = '') {
    return String(value).replace(/[&<>"']/g, (char) => escapeMap[char]);
  }

  function stripHTML(value = '') {
    const template = document.createElement('template');
    template.innerHTML = String(value);
    return template.content.textContent || '';
  }

  async function fetchJSON(path) {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`Unable to load ${path}: ${response.status}`);
    }
    return response.json();
  }

  function debounce(fn, delay = 180) {
    let timeoutId;
    return (...args) => {
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => fn(...args), delay);
    };
  }

  function renderSkeletonCards(target, count = 12, options = {}) {
    if (!target) return;

    const { image = false, lines = 2 } = options;
    const textLines = Array.from({ length: lines }, () => '<div class="skeleton skeleton-text"></div>').join('');

    target.innerHTML = Array.from({ length: count }, () => `
      <div class="skeleton-card">
        ${image ? '<div class="skeleton skeleton-image"></div>' : ''}
        <div class="skeleton-content">
          <div class="skeleton skeleton-title"></div>
          ${textLines}
        </div>
      </div>
    `).join('');
  }

  function renderEmptyState(target, title = 'No results found') {
    if (!target) return;
    target.innerHTML = `<p class="empty-state">${escapeHTML(title)}</p>`;
  }

  function bindSearch(input, getData, filter, render) {
    if (!input) return;

    input.addEventListener('input', debounce((event) => {
      const query = event.target.value.trim().toLowerCase();
      const data = getData();
      render(query ? data.filter((item) => filter(item, query)) : data);
    }));
  }

  window.CN = {
    bindSearch,
    debounce,
    escapeHTML,
    fetchJSON,
    renderEmptyState,
    renderSkeletonCards,
    stripHTML,
  };
})();
