# TYPESET — Magazine Éditorial

> Magazine éditorial brutaliste construit en HTML, CSS et JavaScript vanilla — aucun framework, aucune dépendance.

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)

---

## Aperçu

TYPESET est un magazine éditorial fictif dédié au design, à la technologie et à la culture numérique. Le projet a été conçu comme une vitrine des fonctionnalités CSS et JavaScript modernes en 2025, en prouvant qu'un site sophistiqué peut être construit sans aucun framework ni bibliothèque externe.

**[→ Voir la démo en ligne][(demo-typeset-app](https://typeset-beta.vercel.app/))**

---

## Fonctionnalités

- **13 articles** avec contenus distincts, démos interactives et blocs de code annotés
- **Filtrage par catégorie** (Design, Technologie, Culture, Essai) en JavaScript vanilla
- **Recherche live** avec debounce pour éviter les appels inutiles
- **Thème clair / sombre** persistant via `localStorage` avec transition fluide
- **Ticker d'actualités** infini, pausé au survol, respectueux de `prefers-reduced-motion`
- **Design responsive** adaptatif sur mobile, tablette et desktop
- **Date dynamique** affichée en temps réel dans le header

---

## Stack & Choix techniques

Ce projet a délibérément écarté tout framework pour démontrer la maturité des technologies web natives en 2025.

### CSS Moderne

| Fonctionnalité | Usage dans le projet |
|---|---|
| `animation-timeline: view()` | Révélation des sections au scroll, sans JS |
| `@property` | Variables CSS typées et animables |
| `View Transitions API` | Transition fluide lors du changement de thème |
| `container-type: inline-size` | Cards responsives selon leur conteneur, pas le viewport |
| Unité `cqi` | Typographie fluide contextuelle (`font-size: clamp(1rem, 4cqi, 2rem)`) |
| `prefers-reduced-motion` | Désactivation des animations pour les utilisateurs sensibles |
| `prefers-color-scheme` | Détection automatique du thème système |
| CSS Custom Properties | Design system complet via variables dans `variables.css` |
| CSS Grid 12 colonnes | Layout éditorial asymétrique |

### JavaScript Vanilla

| Fonctionnalité | Fichier | Détail |
|---|---|---|
| Thème dark/light | `js/theme.js` | Persistance `localStorage`, sync système, View Transition |
| Filtrage + recherche | `js/filter.js` | Debounce 250ms, filtrage combiné catégorie + texte |
| Fallback animations | `js/animations.js` | `IntersectionObserver` si scroll-driven non supporté |
| Ticker | `js/ticker.js` | Pause hover, respect `prefers-reduced-motion` |

---

## Structure du projet

```
typeset/
├── index.html               # Page d'accueil — grille des articles
│
├── articles/                # 13 pages articles indépendantes
│   ├── brutalisme.html
│   ├── css2025.html
│   ├── ia-design.html
│   ├── typographie.html
│   ├── minimalisme.html
│   ├── variable-fonts.html
│   ├── container-queries.html
│   ├── web-nostalgie.html
│   ├── dark-patterns.html
│   ├── motion-ui.html
│   ├── web-components.html
│   ├── open-source-design.html
│   └── accessibilite.html
│
├── css/
│   ├── reset.css            # Normalisation cross-browser
│   ├── variables.css        # Design tokens — couleurs, typo, espacements
│   ├── layout.css           # Structure globale — header, hero, grille, footer
│   ├── components.css       # Cards, boutons, recherche, pages articles
│   └── animations.css       # Toutes les animations et transitions
│
└── js/
    ├── theme.js             # Toggle dark/light + View Transitions API
    ├── filter.js            # Filtres catégories + recherche live debounce
    ├── animations.js        # Fallback IntersectionObserver + effets
    └── ticker.js            # Ticker infini + pause hover
```

---

## Installation & Déploiement

### En local

Aucune installation requise. Cloner le repo et ouvrir `index.html` dans un navigateur.

```bash
git clone https://github.com/UBONGO2000/TYPESET.git
cd typeset
# Ouvrir index.html dans le navigateur
# ou lancer un serveur local :
npx serve .
```

### Déploiement sur Vercel

1. Pusher le repo sur GitHub
2. Créer un nouveau projet sur [vercel.com](https://vercel.com)
3. Configurer :
   - **Framework Preset** → `Other`
   - **Root Directory** → `typeset` (si le projet est dans un sous-dossier)
   - **Output Directory** → laisser vide
4. Déployer — c'est tout.

---

## Compatibilité navigateurs

| Fonctionnalité | Chrome | Firefox | Safari | Fallback |
|---|---|---|---|---|
| Scroll-driven animations | ✅ 115+ | ✅ 110+ | ✅ 17+ | `IntersectionObserver` |
| View Transitions API | ✅ 111+ | ✅ 119+ | ✅ 18+ | Transition CSS classique |
| Container Queries | ✅ 105+ | ✅ 110+ | ✅ 16+ | Layout fixe |
| `@property` | ✅ 85+ | ✅ 128+ | ✅ 15.4+ | Variable statique |

Les navigateurs non compatibles reçoivent automatiquement un fallback fonctionnel grâce aux `@supports` et à la détection JS.

---

## Ce que ce projet démontre

- Maîtrise des **spécifications CSS 2025** les plus récentes
- Capacité à construire une **interface production-grade sans framework**
- Architecture CSS **modulaire et maintenable**
- **Veille technologique active** : fonctionnalités adoptées dès leur support stable
- Sensibilité **UI/UX** : typographie éditoriale, layouts asymétriques, micro-interactions
- Respect de l'**accessibilité** : motion réduit, contrastes, navigation clavier, HTML sémantique

---

## Auteur

**Georges NTCHANGA**
Étudiant en Bachelor Développeur Web/Mobile — IPI Toulouse

[![GitHub](https://img.shields.io/badge/GitHub-UBONGO2000-181717?style=flat&logo=github)](https://github.com/UBONGO2000)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-georges--ntchanga-0A66C2?style=flat&logo=linkedin)](https://www.linkedin.com/in/georges-ntchanga/)

---

*Projet personnel — 2025*