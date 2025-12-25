(() => {
  const isInnerPage = window.location.pathname.includes('/pages/');
  const base = isInnerPage ? '..' : '.';

  function mountAppBar() {
    const mount = document.getElementById('app-bar-mount');
    if (!mount) return;

    mount.innerHTML = `
      <header class="app-bar">
        <div class="container">
          <a href="${base}/index.html" aria-label="Home">
            <img src="${base}/assets/logo.webp" alt="Logo" class="app-logo">
          </a>
          <nav>
            <a href="${base}/index.html" class="nav-btn">Home</a>
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
