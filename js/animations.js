/* ===========================
   ANIMATIONS JS — TYPESET
   Fallback IntersectionObserver pour les navigateurs
   sans scroll-driven animations CSS
=========================== */

document.addEventListener('DOMContentLoaded', function () {
  // Detect scroll-driven animations support
  const supportsScrollDriven = CSS.supports('animation-timeline', 'scroll()');

  if (!supportsScrollDriven) {
    // Fallback: use IntersectionObserver
    const revealEls = document.querySelectorAll('.reveal-section');

    if (revealEls.length === 0) return;

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px'
    });

    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  }

  // ---- CARD STAGGER ENTRANCE ----
  const grid = document.getElementById('articles-grid');
  if (grid) {
    const cards = grid.querySelectorAll('.card');
    cards.forEach(function (card, i) {
      card.style.animationDelay = (i * 60) + 'ms';
    });
  }

  // ---- MASTHEAD CURSOR EFFECT ----
  const masthead = document.querySelector('.masthead-title');
  if (masthead) {
    masthead.addEventListener('mousemove', function (e) {
      const rect = this.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 6;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 3;
      this.style.transform = `perspective(800px) rotateY(${x}deg) rotateX(${-y}deg)`;
    });
    masthead.addEventListener('mouseleave', function () {
      this.style.transform = '';
    });
  }
});
