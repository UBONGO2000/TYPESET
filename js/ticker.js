/* ===========================
   TICKER — TYPESET
   Défilement infini, pause au hover
=========================== */

document.addEventListener('DOMContentLoaded', function () {
  const ticker = document.getElementById('ticker');
  if (!ticker) return;

  // Pause on hover
  ticker.addEventListener('mouseenter', function () {
    this.style.animationPlayState = 'paused';
  });

  ticker.addEventListener('mouseleave', function () {
    this.style.animationPlayState = 'running';
  });

  // Respect prefers-reduced-motion
  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (motionQuery.matches) {
    ticker.style.animation = 'none';
  }

  motionQuery.addEventListener('change', function (e) {
    ticker.style.animation = e.matches ? 'none' : '';
  });
});
