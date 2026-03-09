/* ===========================
   THEME — TYPESET
   Gestion dark/light mode
=========================== */

(function () {
  const STORAGE_KEY = 'typeset-theme';

  function getPreferred() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
    const btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.querySelector('.theme-icon').textContent = theme === 'dark' ? '○' : '◑';
      btn.setAttribute('aria-label', theme === 'dark' ? 'Passer au mode clair' : 'Passer au mode sombre');
    }
  }

  // Apply on load (before paint to avoid flash)
  applyTheme(getPreferred());

  document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;

    btn.addEventListener('click', function () {
      const current = document.body.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';

      // Use View Transition API if available
      if (document.startViewTransition) {
        document.startViewTransition(() => applyTheme(next));
      } else {
        applyTheme(next);
      }
    });

    // Sync with system preference change
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
      if (!localStorage.getItem(STORAGE_KEY)) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  });
})();
