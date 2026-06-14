// Our HD Story — interactions
(function () {
  'use strict';

  // --- Mobile menu toggle ---------------------------------------------------
  const toggle = document.getElementById('menuToggle');
  const menu = document.getElementById('mobileMenu');
  const icon = document.getElementById('menuIcon');
  const OPEN = 'M6 18L18 6M6 6l12 12';   // X
  const CLOSED = 'M4 6h16M4 12h16M4 18h16'; // hamburger

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      const isOpen = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
      if (icon) icon.setAttribute('d', isOpen ? OPEN : CLOSED);
    });
  }

  // --- Header border on scroll ---------------------------------------------
  const header = document.getElementById('siteHeader');
  if (header) {
    const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // --- Footer year ----------------------------------------------------------
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // --- Reveal on scroll -----------------------------------------------------
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('is-visible'));
  }
})();
