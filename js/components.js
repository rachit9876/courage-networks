(() => {
  const isInnerPage = window.location.pathname.includes('/pages/');
  const base = isInnerPage ? '..' : '.';
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  const navItems = [
    { href: 'index.html', label: 'Home', icon: 'icon-home' },
    { href: 'pages/ost.html', label: 'OST', icon: 'icon-music' },
    { href: 'pages/episodes.html', label: 'Episodes', icon: 'icon-episodes' },
    { href: 'pages/gallery.html', label: 'Gallery', icon: 'icon-gallery' },
    { href: 'pages/cookbook.html', label: 'Cookbook', icon: 'icon-research' },
  ];

  function resolveHref(href) {
    if (!isInnerPage) return `${base}/${href}`;
    return href === 'index.html' ? `${base}/index.html` : `${base}/${href}`;
  }

  function isActive(href) {
    return href.endsWith(currentPage);
  }

  function mountAppBar() {
    const mount = document.getElementById('app-bar-mount');
    if (!mount) return;

    const links = navItems.map((item) => `
      <a href="${resolveHref(item.href)}" class="nav-btn ${isActive(item.href) ? 'active' : ''}" ${isActive(item.href) ? 'aria-current="page"' : ''}>
        <svg class="nav-icon" aria-hidden="true"><use href="${base}/assets/icons.svg#${item.icon}"></use></svg>
        <span>${item.label}</span>
      </a>
    `).join('');

    mount.innerHTML = `
      <header class="app-bar">
        <div class="container">
          <a href="${base}/index.html" aria-label="Home">
            <img src="${base}/assets/logo.webp" alt="Logo" class="app-logo">
          </a>
          <nav>
            ${links}
          </nav>
        </div>
      </header>
    `;
  }

  function mountModal() {
    const mount = document.getElementById('modal-mount');
    if (!mount) return;

    mount.innerHTML = `
      <div id="modal" class="modal" role="dialog" aria-modal="true" aria-label="Details">
        <div class="modal-content">
          <button class="modal-close" type="button" aria-label="Close">&times;</button>
          <div id="modal-body"></div>
        </div>
      </div>
    `;
  }

  mountAppBar();
  mountModal();
})();
