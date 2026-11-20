/**
 * Telford Elite Companions - Main Script
 * Handles mobile navigation toggle and footer year
 */

(function () {
  'use strict';

  // ===== Mobile Menu Toggle =====
  const menuBtn = document.querySelector('.menu-btn');
  const mobileNav = document.querySelector('#mobileNav');

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', function () {
      const isHidden = mobileNav.hasAttribute('hidden');

      if (isHidden) {
        // Open the menu
        mobileNav.removeAttribute('hidden');
        menuBtn.setAttribute('aria-expanded', 'true');
        menuBtn.innerHTML = 'Menu ▴';
      } else {
        // Close the menu
        mobileNav.setAttribute('hidden', '');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.innerHTML = 'Menu ▾';
      }
    });

    // Close mobile menu when a link is clicked
    const mobileLinks = mobileNav.querySelectorAll('a');
    mobileLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.setAttribute('hidden', '');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.innerHTML = 'Menu ▾';
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function (event) {
      const isClickInsideMenu = mobileNav.contains(event.target);
      const isClickOnButton = menuBtn.contains(event.target);

      if (!isClickInsideMenu && !isClickOnButton && !mobileNav.hasAttribute('hidden')) {
        mobileNav.setAttribute('hidden', '');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.innerHTML = 'Menu ▾';
      }
    });
  }

  // ===== Footer Year =====
  const yearSpan = document.getElementById('y');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // ===== Smooth Scroll for Anchor Links (optional enhancement) =====
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

})();