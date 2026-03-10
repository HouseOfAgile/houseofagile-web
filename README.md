# House of Agile — Website

Agency website for **houseofagile.com**, built with [Astro](https://astro.build/) and Tailwind CSS.

## Tech Stack

- **Astro 6** — Static site generator
- **Tailwind CSS 3** — Utility-first styling
- **TypeScript** — Type-safe frontmatter and components
- **i18n** — Three languages: English (default), German (`/de/`), French (`/fr/`)

## Project Structure

```
src/
├── components/       # Shared Astro components (Navigation, Footer, HomePage, etc.)
├── content/          # Content collections (case studies, services) as Markdown
│   ├── caseStudies/  # en/, de/, fr/ subdirectories
│   └── services/     # en/, de/, fr/ subdirectories
├── i18n/             # Translation strings and utilities
├── layouts/          # BaseLayout with SEO, hreflang, Schema.org
├── pages/            # Route pages (index, case-studies/[slug], services/[slug])
│   ├── de/           # German routes
│   └── fr/           # French routes
└── styles/           # global.css (design tokens, animations, component styles)
public/               # Static assets (favicons, logos, webmanifest)
```

## Development

Requires **Node.js >= 22.12.0** (use `nvm use 22` if needed).

```bash
npm install
npm run dev          # Starts dev server on http://localhost:8001
npm run build        # Production build to dist/
npm run preview      # Preview production build
```

## Deployment

Deployed to **GitHub Pages** via GitHub Actions. The workflow at `.github/workflows/deploy.yml` builds and deploys on push to `main`.

## Key Features

- Dark-themed design with animated floating orbs and glow effects
- Scroll-triggered reveal animations (IntersectionObserver)
- Morphing text effect in the hero section
- Glass-morphism cards with 3D tilt on hover
- Client logo marquee strip
- Responsive layout optimized for mobile and desktop
- Shared page components to avoid code duplication across languages
- SEO: sitemap, hreflang tags, Schema.org structured data, Open Graph
