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
          <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-nav" aria-label="Open navigation">
            <svg aria-hidden="true"><use href="${base}/assets/icons.svg#icon-menu"></use></svg>
            <span>Menu</span>
          </button>
          <nav id="primary-nav">
            ${links}
          </nav>
        </div>
      </header>
    `;

    const toggle = mount.querySelector('.menu-toggle');
    const nav = mount.querySelector('#primary-nav');

    toggle?.addEventListener('click', () => {
      const isOpen = nav?.classList.toggle('is-open') || false;
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    });

    nav?.addEventListener('click', (event) => {
      if (!event.target.closest('a')) return;
      nav.classList.remove('is-open');
      toggle?.setAttribute('aria-expanded', 'false');
      toggle?.setAttribute('aria-label', 'Open navigation');
    });
  }

  function mountModal() {
    const mount = document.getElementById('modal-mount');
    if (!mount) return;

    mount.innerHTML = `
      <div id="modal" class="modal" role="dialog" aria-modal="true" aria-label="Details">
        <div class="modal-content">
          <button class="modal-close" type="button" aria-label="Close">
            <svg aria-hidden="true"><use href="${base}/assets/icons.svg#icon-close"></use></svg>
          </button>
          <div id="modal-body"></div>
        </div>
      </div>
    `;
  }

  function mountScrollTopFab() {
    if (!isInnerPage || document.getElementById('scroll-top-fab')) return;

    const button = document.createElement('button');
    button.id = 'scroll-top-fab';
    button.className = 'scroll-top-fab';
    button.type = 'button';
    button.setAttribute('aria-label', 'Scroll to top');
    button.innerHTML = `<svg aria-hidden="true"><use href="${base}/assets/icons.svg#icon-arrow-up"></use></svg>`;
    document.body.appendChild(button);

    const updateVisibility = () => {
      button.classList.toggle('is-visible', window.scrollY > 480);
    };

    button.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', updateVisibility, { passive: true });
    updateVisibility();
  }

  mountAppBar();
  mountModal();
  mountScrollTopFab();
})();
