/* ==========================================================================
   REALTIME.WORKS — main.js
   ========================================================================== */


/* ==========================================================================
   NAV — dodaje klasę .scrolled po przewinięciu
   ========================================================================== */

const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});


/* ==========================================================================
   REVEAL — animacja sekcji przy scrollu
   ========================================================================== */

const reveals = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

reveals.forEach(el => revealObserver.observe(el));
