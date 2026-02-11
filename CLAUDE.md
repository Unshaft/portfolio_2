# Portfolio Killian Perzo - Context File

> Ce fichier est lu automatiquement par Claude au debut de chaque session.

## Apercu du projet

Portfolio personnel bilingue (FR/EN) pour Killian Perzo, Data Scientist specialise en IA agentique.

**URL de production** : https://killianperzo.dev

## Stack technique

| Technologie | Version | Usage |
|-------------|---------|-------|
| Astro | 5.12.1 | Framework SSG |
| React | 19 | Composants interactifs (DotNavigation) |
| Tailwind CSS | 3.4 | Styling (class-based dark mode) |
| TypeScript | - | Typage |
| Alpine.js | - | Interactivite legere |

## Architecture

```
src/
├── components/
│   ├── Navbar.astro          # Navigation glassmorphism + burger mobile
│   ├── Footer.astro          # Footer avec icones SVG sociales
│   ├── ProjectCard.astro     # Carte projet avec getCategoryStyle() + gold-border-glow
│   ├── ThemeToggle.astro     # Dark mode toggle (localStorage + system)
│   ├── DotNavigation.jsx     # Navigation par points (React, IntersectionObserver)
│   ├── SpeedInsights.astro   # Vercel analytics (script vanilla)
│   ├── SkillsCarousel.astro  # Carousel Splide (non utilise dans index redesign)
│   ├── AosInit.jsx           # AOS scroll animations init
│   └── MarkdownRenderer.astro # Rendu markdown avec prose styling
├── layouts/
│   └── BaseLayout.astro      # Layout unique avec scrollMode="snap"|"normal", Google Fonts
├── pages/
│   ├── fr/                   # Pages francaises (index, about, projects, contact, cv, 404)
│   ├── en/                   # Pages anglaises (meme structure)
│   ├── [lang]/projects/[slug].astro  # Page projet dynamique
│   └── api/                  # Endpoints API (projects.json, slug-switch.json)
├── content/
│   ├── config.ts             # Schema Zod des collections
│   └── projects/             # 12 fichiers MD des projets (6 FR + 6 EN)
├── lib/
│   └── constants.ts          # Couleurs categories centralisees + getCategoryStyle()
└── styles/
    └── tailwind.css          # Design system complet (typo, nav, cards, buttons, prose, grid)
```

## Design System (v2 - Fevrier 2026)

### Typographie
- **Display/Headings** : `Syne` (Google Fonts) - geometrique, editorial, bold
- **Body** : `Outfit` (Google Fonts) - clean, moderne, lisible
- Charge via `<link>` dans BaseLayout.astro
- Classes Tailwind : `font-display`, `font-body`

### Palette de couleurs

```typescript
// tailwind.config.mjs
colors = {
  charcoal: '#264653',      // Texte principal light mode
  gold: '#B48E00',          // Accent principal
  'gold-light': '#D4AB2F',  // Accent clair (gradients)
  oldgold: '#A07300',       // Hover accent
  slate: '#E0E1E4',         // Fond alternatif
  midnight: '#0B1121',      // Fond dark mode (body)
  'midnight-light': '#111827' // Fond dark mode alternatif
}

// Categories projets (src/lib/constants.ts)
categoryStyles = {
  pro: 'bg-blue-600 text-white',
  perso: 'bg-emerald-600 text-white',
  study: 'bg-purple-600 text-white'
}
```

### Conventions de design
- **Surfaces** : `bg-white/60 dark:bg-gray-800/40 border border-gray-200/50 dark:border-gray-700/30 backdrop-blur-sm` (glassmorphism subtil)
- **Cards** : `rounded-2xl` + classes `card-hover` et `gold-border-glow`
- **Buttons** : `.btn-primary` (gradient gold) et `.btn-secondary` (outline)
- **Page headers** : Label uppercase `text-gold tracking-widest` + `font-display font-extrabold` + `gold-accent` pour mot cle
- **Fond body** : `bg-gray-50 dark:bg-midnight bg-grid-pattern` (grille subtile doree)
- **Navbar** : Glassmorphism (`bg-white/80 dark:bg-midnight/80 backdrop-blur-xl`)

### Animations
- `animate-slide-up` / `animate-slide-up-delay-1/2/3` : Entree echelonnee hero
- `animate-glow-pulse` : Orbes decoratifs
- `animate-fadein` : Fade-in ProjectCard
- `card-hover` : Translation Y + shadow au hover

## Projets (ordre d'affichage)

| # | Projet | Categorie | Stack principal |
|---|--------|-----------|-----------------|
| 1 | DataSentinel AI | perso | FastAPI, LangChain, Claude, ChromaDB |
| 2 | Data Quality Agent | perso | LangGraph, LangChain, Claude, ChromaDB |
| 3 | Site Web Mariage | perso | Next.js 15, Prisma, SQLite, Sharp |
| 4 | QueryBot API | pro | FastAPI, JIRA API, OAuth |
| 5 | Budget Tracker | perso | Streamlit, Pandas, Plotly |
| 6 | Badminton ML | perso | scikit-learn, OpenCV, MediaPipe |

## Fonctionnalites implementees

- [x] Bilingue FR/EN avec hreflang
- [x] Dark mode (localStorage + prefers-color-scheme)
- [x] SEO complet (meta, OG, Twitter, sitemap, robots.txt)
- [x] Formulaire contact Formspree (ID: meeeoynr)
- [x] Mobile responsive avec burger menu
- [x] Tri des projets par `order`
- [x] Layout unique avec `scrollMode` prop
- [x] Design system v2 : Syne/Outfit fonts, glassmorphism, gold gradients
- [x] Animations d'entree echelonnees (hero)
- [x] Fond grille subtile (bg-grid-pattern)
- [x] Footer avec icones SVG (GitHub, LinkedIn, Email)
- [x] Cards avec gold-border-glow au hover

## Fichiers importants

| Fichier | Role |
|---------|------|
| `src/content/config.ts` | Schema des projets (title, locale, order, category...) |
| `src/lib/constants.ts` | `getCategoryStyle()` pour couleurs unifiees |
| `src/layouts/BaseLayout.astro` | Layout principal avec SEO, scrollMode, Google Fonts |
| `src/styles/tailwind.css` | Design system complet (typo, nav, cards, buttons, prose) |
| `tailwind.config.mjs` | Config Tailwind (fonts, colors, animations, backgrounds) |
| `src/components/Navbar.astro` | Navigation glassmorphism sticky |
| `src/components/ProjectCard.astro` | Carte projet avec hover effects |

## Commandes utiles

```bash
npm run dev      # Serveur de developpement
npm run build    # Build de production
npm run preview  # Preview du build
```

## Notes pour les futures sessions

### A faire (P2)
- [ ] Ajouter images pour DataSentinel AI et Wedding Website
- [ ] Creer OG image (`public/img/og-image.png`)
- [ ] Ameliorer page 404 (appliquer nouveau design system)
- [ ] Ajouter tests basiques
- [ ] Centraliser l'i18n (strings hardcodees dans pages)
- [ ] Ajouter des vraies icones SVG pour les skills (Python, LangChain, etc.)

### Points d'attention
- Les projets utilisent `order` pour le tri (1 = premier affiche)
- `scrollMode="snap"` pour pages index, `"normal"` pour autres pages
- Toujours utiliser `getCategoryStyle()` de `src/lib/constants.ts` pour les couleurs de categories
- Images lazy loading avec `loading="lazy" decoding="async"`
- **Ne pas re-ajouter `...colors` dans tailwind.config** (causait des deprecation warnings)
- Les surfaces utilisent toutes le pattern glassmorphism : `bg-white/60 dark:bg-gray-800/40 border-gray-200/50`
- Les titres de page suivent le pattern : label uppercase gold + titre Syne bold + mot-cle en `gold-accent`

### Bugs connus corriges
- ~~SpeedInsights importait la version Next.js~~ -> Script vanilla
- ~~Couleurs categories incoherentes~~ -> Centralisees dans constants.ts
- ~~Deux layouts dupliques~~ -> Un seul avec scrollMode
- ~~aria-expanded avec boolean~~ -> String 'true'/'false'
- ~~Deprecation warnings Tailwind colors~~ -> Supprime `...colors` spread
- ~~Icons skills incorrectes (Python.svg pour LangChain)~~ -> Remplace par texte + description
