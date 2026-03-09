/* ===========================
   FILTER & SEARCH — TYPESET
   Filtrage par catégorie + recherche live avec debounce
=========================== */

document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav-link[data-filter]');
  const cards = document.querySelectorAll('.card[data-category]');
  const featuredItems = document.querySelectorAll('.featured-item[data-category]');
  const searchInput = document.getElementById('search-input');
  const noResults = document.getElementById('no-results');

  let activeFilter = 'all';
  let searchQuery = '';

  // ---- FILTER BY CATEGORY ----
  navLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      activeFilter = this.dataset.filter;

      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');

      applyFilters();
    });
  });

  // ---- SEARCH WITH DEBOUNCE ----
  let debounceTimer;

  searchInput.addEventListener('input', function () {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(function () {
      searchQuery = searchInput.value.trim().toLowerCase();
      applyFilters();
    }, 250);
  });

  // ---- APPLY COMBINED FILTERS ----
  function applyFilters() {
    let visibleCount = 0;

    cards.forEach(function (card) {
      const category = card.dataset.category;
      const titleEl = card.querySelector('.card-title');
      const excerptEl = card.querySelector('.card-excerpt');
      const title = titleEl ? titleEl.textContent.toLowerCase() : '';
      const excerpt = excerptEl ? excerptEl.textContent.toLowerCase() : '';

      const matchesFilter = activeFilter === 'all' || category === activeFilter;
      const matchesSearch = searchQuery === '' || title.includes(searchQuery) || excerpt.includes(searchQuery);

      if (matchesFilter && matchesSearch) {
        showCard(card);
        visibleCount++;
      } else {
        hideCard(card);
      }
    });

    // Filter featured row too
    featuredItems.forEach(function (item) {
      const category = item.dataset.category;
      const titleEl = item.querySelector('.featured-title');
      const title = titleEl ? titleEl.textContent.toLowerCase() : '';
      const matchesFilter = activeFilter === 'all' || category === activeFilter;
      const matchesSearch = searchQuery === '' || title.includes(searchQuery);

      if (matchesFilter && matchesSearch) {
        item.classList.remove('hidden');
        item.style.display = '';
      } else {
        item.classList.add('hidden');
        item.style.display = 'none';
      }
    });

    // Show/hide no-results message
    if (noResults) {
      if (visibleCount === 0) {
        noResults.classList.remove('hidden');
        noResults.innerHTML = `<p>Aucun article trouvé${searchQuery ? ' pour "<strong>' + escapeHtml(searchQuery) + '</strong>"' : ''}.</p>`;
      } else {
        noResults.classList.add('hidden');
      }
    }
  }

  function showCard(card) {
    card.classList.remove('hidden');
    card.style.display = '';
  }

  function hideCard(card) {
    card.classList.add('hidden');
    card.style.display = 'none';
  }

  function escapeHtml(str) {
    return str.replace(/[&<>"']/g, function (m) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m];
    });
  }

  // ---- LIVE DATE IN HEADER ----
  const dateEl = document.getElementById('live-date');
  if (dateEl) {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateEl.textContent = now.toLocaleDateString('fr-FR', options);
  }
});
