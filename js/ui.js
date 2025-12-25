(() => {
  function getModalElements() {
    const modal = document.getElementById('modal');
    if (!modal) return null;

    const modalBody = document.getElementById('modal-body');
    const closeBtn = modal.querySelector('.modal-close');

    return { modal, modalBody, closeBtn };
  }

  function open(html) {
    const els = getModalElements();
    if (!els) return;

    if (els.modalBody) {
      els.modalBody.innerHTML = html;
    }

    els.modal.classList.add('active');
    document.body.classList.add('modal-open');
  }

  function close() {
    const els = getModalElements();
    if (!els) return;

    els.modal.classList.remove('active');
    document.body.classList.remove('modal-open');
  }

  function init() {
    const els = getModalElements();
    if (!els) return;

    if (els.closeBtn) {
      els.closeBtn.addEventListener('click', close);
    }

    els.modal.addEventListener('click', (e) => {
      if (e.target === els.modal) close();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && els.modal.classList.contains('active')) close();
    });
  }

  window.CNModal = { init, open, close };

  // Safe auto-init (modal may be injected by `components.js`).
  init();
})();
