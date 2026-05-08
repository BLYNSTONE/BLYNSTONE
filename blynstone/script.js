/* ═══════════════════════════════════════════════════
   BLYNSTONE — script.js
   Vanilla JS — No dependencies, no build step
════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── SCROLL REVEAL ──────────────────────────────── */
  function initReveal() {
    var elements = document.querySelectorAll('.reveal');
    if (!elements.length) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach(function (el) { observer.observe(el); });

    // Trigger hero content immediately (above fold)
    var heroReveals = document.querySelectorAll('.hero .reveal');
    heroReveals.forEach(function (el) {
      setTimeout(function () { el.classList.add('is-visible'); }, 100);
    });
  }

  /* ── INIT ───────────────────────────────────────── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initReveal);
  } else {
    initReveal();
  }

})();
