/**
 * Telford Elite Companions - Main Script
 * Bulletproof Mobile Menu Toggle
 */

(function () {
  'use strict';

  const menuBtn = document.querySelector('.menu-btn');
  const mobileNav = document.querySelector('#mobileNav');

  // SVG Icons
  const hamburgerIcon = `
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  `;

  const closeIcon = `
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  `;

  if (menuBtn && mobileNav) {
    
    // Toggle menu on button click
    menuBtn.addEventListener('click', function (e) {
      e.preventDefault(); 
      e.stopPropagation();
      
      // Toggle the 'show' class
      mobileNav.classList.toggle('show');
      
      // Check if menu is now open
      if (mobileNav.classList.contains('show')) {
        menuBtn.setAttribute('aria-expanded', 'true');
        menuBtn.innerHTML = closeIcon; 
      } else {
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.innerHTML = hamburgerIcon; 
      }
    });

    // Close menu when a link is clicked
    const mobileLinks = mobileNav.querySelectorAll('a');
    mobileLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('show');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.innerHTML = hamburgerIcon; 
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (event) {
      const isClickInsideMenu = mobileNav.contains(event.target);
      const isClickOnButton = menuBtn.contains(event.target);

      if (!isClickInsideMenu && !isClickOnButton && mobileNav.classList.contains('show')) {
        mobileNav.classList.remove('show');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.innerHTML = hamburgerIcon;
      }
    });
  }

  // ===== Footer Year =====
  const yearSpan = document.getElementById('y');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // ===== Smooth Scroll for Anchor Links =====
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(function (link) {
    if (link.classList.contains('menu-btn')) return;

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