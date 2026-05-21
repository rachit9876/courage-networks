(() => {
  const languageModal = document.getElementById('languageModal');
  const desktopOnlyModal = document.getElementById('desktopOnlyModal');
  const typingEl = document.getElementById('typing-text');
  const heroImage = document.querySelector('.hero-image');
  const heroSkeleton = document.getElementById('hero-skeleton');
  const openLanguageBtn = document.querySelector('[data-open-language]');
  const closeLanguageBtn = document.querySelector('[data-close-language]');
  const closeDesktopOnlyBtn = document.querySelector('[data-close-desktop-only]');
  const desktopOnlyLinks = document.querySelectorAll('[data-desktop-only]');
  let hasTypedIntro = false;

  function isMobileOrTablet() {
    return window.matchMedia('(max-width: 760px), (pointer: coarse)').matches;
  }

  function openLanguageModal() {
    if (!languageModal) return;
    languageModal.classList.add('active');
    document.body.classList.add('modal-open');
  }

  function closeLanguageModal() {
    if (!languageModal) return;
    languageModal.classList.remove('active');
    document.body.classList.remove('modal-open');
  }

  function openDesktopOnlyModal() {
    if (!desktopOnlyModal) return;
    desktopOnlyModal.classList.add('active');
    document.body.classList.add('modal-open');
  }

  function closeDesktopOnlyModal() {
    if (!desktopOnlyModal) return;
    desktopOnlyModal.classList.remove('active');
    document.body.classList.remove('modal-open');
  }

  function typeIntro() {
    if (!typingEl || hasTypedIntro) return;
    hasTypedIntro = true;

    const text = 'Welcome to\nCourage Networks';
    let index = 0;
    typingEl.textContent = '';

    function typeNext() {
      if (index >= text.length) return;
      typingEl.textContent += text.charAt(index);
      index += 1;
      window.setTimeout(typeNext, 80);
    }

    window.setTimeout(typeNext, 400);
  }

  openLanguageBtn?.addEventListener('click', openLanguageModal);
  closeLanguageBtn?.addEventListener('click', closeLanguageModal);
  closeDesktopOnlyBtn?.addEventListener('click', closeDesktopOnlyModal);

  desktopOnlyLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      if (!isMobileOrTablet()) return;
      event.preventDefault();
      openDesktopOnlyModal();
    });
  });

  languageModal?.addEventListener('click', (event) => {
    if (event.target === languageModal) closeLanguageModal();
  });

  desktopOnlyModal?.addEventListener('click', (event) => {
    if (event.target === desktopOnlyModal) closeDesktopOnlyModal();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && languageModal?.classList.contains('active')) {
      closeLanguageModal();
    }
    if (event.key === 'Escape' && desktopOnlyModal?.classList.contains('active')) {
      closeDesktopOnlyModal();
    }
  });

  heroImage?.addEventListener('load', () => {
    heroImage.hidden = false;
    if (heroSkeleton) heroSkeleton.hidden = true;
    typeIntro();
  });

  if (heroImage?.complete) {
    heroImage.dispatchEvent(new Event('load'));
  }
})();
