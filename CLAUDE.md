# Portfolio Killian Perzo - Context File

> Ce fichier est lu automatiquement par Claude au début de chaque session.

## Aperçu du projet

Portfolio personnel bilingue (FR/EN) pour Killian Perzo, Data Analyst & Développeur Full-Stack.

**URL de production** : https://killianperzo.dev

## Stack technique

| Technologie | Version | Usage |
|-------------|---------|-------|
| Astro | 5.12.1 | Framework SSG |
| React | 19 | Composants interactifs (DotNavigation) |
| Tailwind CSS | 4.0 | Styling |
| TypeScript | - | Typage |
| Alpine.js | - | Interactivité légère |

## Architecture

```
src/
├── components/
│   ├── Navbar.astro          # Navigation + burger mobile
│   ├── Footer.astro
│   ├── ProjectCard.astro     # Carte projet avec getCategoryStyle()
│   ├── ThemeToggle.astro     # Dark mode toggle
│   ├── DotNavigation.jsx     # Navigation par points (React)
│   └── SpeedInsights.astro   # Vercel analytics (script vanilla)
├── layouts/
│   └── BaseLayout.astro      # Layout unique avec scrollMode="snap"|"normal"
├── pages/
│   ├── fr/                   # Pages françaises
│   ├── en/                   # Pages anglaises
│   ├── [lang]/projects/[slug].astro  # Page projet dynamique
│   └── api/                  # Endpoints API
├── content/
│   ├── config.ts             # Schéma Zod des collections
│   └── projects/             # Fichiers MD des projets (FR/EN)
├── lib/
│   └── constants.ts          # Couleurs catégories centralisées
└── styles/
    └── tailwind.css          # Styles custom + prose dark mode
```

## Projets (ordre d'affichage)

| # | Projet | Catégorie | Stack principal |
|---|--------|-----------|-----------------|
| 1 | DataSentinel AI | perso | FastAPI, LangChain, Claude, ChromaDB |
| 2 | Data Quality Agent | perso | LangGraph, LangChain, Claude, ChromaDB |
| 3 | Site Web Mariage | perso | Next.js 15, Prisma, SQLite, Sharp |
| 4 | QueryBot API | pro | FastAPI, JIRA API, OAuth |
| 5 | Budget Tracker | perso | Streamlit, Pandas, Plotly |
| 6 | Badminton ML | perso | scikit-learn, OpenCV, MediaPipe |

## Couleurs du thème

```typescript
// src/lib/constants.ts
categoryStyles = {
  pro: 'bg-blue-600',      // Bleu
  perso: 'bg-emerald-600', // Vert
  study: 'bg-purple-600'   // Violet
}

// tailwind.config.mjs
colors = {
  charcoal: '#264653',     // Texte principal
  gold: '#B48E00',         // Accent
  oldgold: '#A07300',      // Hover
  slate: '#E0E1E4'         // Fond clair
}
```

## Fonctionnalités implémentées

- [x] Bilingue FR/EN avec hreflang
- [x] Dark mode (localStorage + prefers-color-scheme)
- [x] SEO complet (meta, OG, Twitter, sitemap, robots.txt)
- [x] Formulaire contact Formspree (ID: meeeoynr)
- [x] Mobile responsive avec burger menu animé
- [x] Tri des projets par `order`
- [x] Layout unique avec `scrollMode` prop

## Fichiers importants à connaître

| Fichier | Rôle |
|---------|------|
| `src/content/config.ts` | Schéma des projets (title, locale, order, category...) |
| `src/lib/constants.ts` | `getCategoryStyle()` pour couleurs unifiées |
| `src/layouts/BaseLayout.astro` | Layout principal avec SEO et scrollMode |
| `src/styles/tailwind.css` | Classes .prose avec dark mode |

## Commandes utiles

```bash
npm run dev      # Serveur de développement
npm run build    # Build de production
npm run preview  # Preview du build
```

## Notes pour les futures sessions

### À faire (P2)
- [ ] Ajouter images pour DataSentinel AI et Wedding Website
- [ ] Créer OG image (`public/img/og-image.png`)
- [ ] Améliorer page 404 (dark mode, suggestions)
- [ ] Ajouter tests basiques
- [ ] Centraliser l'i18n (strings hardcodées dans Navbar)

### Points d'attention
- Les projets utilisent `order` pour le tri (1 = premier affiché)
- `scrollMode="snap"` pour pages index, `"normal"` pour autres pages
- Toujours utiliser `getCategoryStyle()` de `src/lib/constants.ts` pour les couleurs de catégories
- Images lazy loading avec `loading="lazy" decoding="async"`

### Bugs connus corrigés
- ~~SpeedInsights importait la version Next.js~~ → Script vanilla
- ~~Couleurs catégories incohérentes~~ → Centralisées dans constants.ts
- ~~Deux layouts dupliqués~~ → Un seul avec scrollMode
- ~~aria-expanded avec boolean~~ → String 'true'/'false'