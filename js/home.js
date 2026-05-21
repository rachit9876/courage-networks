(() => {
  const languageModal = document.getElementById('languageModal');
  const typingEl = document.getElementById('typing-text');
  const heroImage = document.querySelector('.hero-image');
  const heroSkeleton = document.getElementById('hero-skeleton');
  const openLanguageBtn = document.querySelector('[data-open-language]');
  const closeLanguageBtn = document.querySelector('[data-close-language]');

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

  function typeIntro() {
    if (!typingEl) return;

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

  languageModal?.addEventListener('click', (event) => {
    if (event.target === languageModal) closeLanguageModal();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && languageModal?.classList.contains('active')) {
      closeLanguageModal();
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
