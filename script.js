(function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileLinks = document.querySelectorAll('.mobile-nav-list a');

  if (!menuToggle || !mobileNav) return;

  function openMenu() {
    menuToggle.classList.add('active');
    mobileNav.classList.add('open');
    document.body.style.overflow = 'hidden';
    menuToggle.setAttribute('aria-label', '메뉴 닫기');
  }

  function closeMenu() {
    menuToggle.classList.remove('active');
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
    menuToggle.setAttribute('aria-label', '메뉴 열기');
  }

  menuToggle.addEventListener('click', function () {
    if (mobileNav.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  mobileLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      closeMenu();
    });
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      closeMenu();
    }
  });
})();
