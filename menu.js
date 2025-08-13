document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');

  if (!menuToggle || !nav) return;

  const toggleNav = () => {
    const open = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', open);
    document.body.classList.toggle('no-scroll', open);
  };

  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleNav();
  });

  nav.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      nav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('no-scroll');
    }
  });

  document.addEventListener('click', (e) => {
    if (nav.classList.contains('open') && !nav.contains(e.target) && e.target !== menuToggle) {
      nav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('no-scroll');
    }
  });
});
