/**
 * Munajaat Nomani – Landing page scripts
 * Scroll-triggered reveal animations
 */

(function () {
  'use strict';

  function initReveal() {
    var revealSelectors = [
      '.features',
      '.screenshots',
      '.quote',
      '.about',
      '.cta'
    ];

    var observerOptions = {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.08
    };

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal--visible');
        }
      });
    }, observerOptions);

    revealSelectors.forEach(function (selector) {
      var el = document.querySelector(selector);
      if (el) {
        el.classList.add('reveal');
        observer.observe(el);
      }
    });

    var heroInner = document.querySelector('.hero__inner');
    if (heroInner) {
      heroInner.classList.add('reveal', 'reveal--visible');
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initReveal);
  } else {
    initReveal();
  }
})();
