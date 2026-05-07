# House of Agile Web - AI Agent Instructions

This project is the agency website for **House of Agile**. It is built using **Astro 6** and **Tailwind CSS**, and uses standard Astro i18n configurations.

## Build and Deployment

- **Hosting**: GitHub Pages
- **Deployment Strategy**: We use the official `actions/upload-pages-artifact` in GitHub Actions (see `.github/workflows/deploy.yml`). Commits pushed to `main` are automatically built and deployed. There is NO `gh-pages` branch.
- **Sitemap Quirk**: Astro's `@astrojs/sitemap` plugin generates `sitemap-index.xml` and `sitemap-0.xml`. Many tools expect exactly `sitemap.xml`. The `package.json` build script includes `cp dist/sitemap-index.xml dist/sitemap.xml` to satisfy these tools. Do not alter this behavior without notifying the user.

## Commands

- Install dependencies: `npm install`
- Run dev server: `npm run dev`
- Build site: `npm run build`
- Preview build: `npm run preview`

## Architectural & Styling Guidelines

- **Vanilla CSS / Tailwind**: The project uses Tailwind CSS for primary utility styling and `styles/global.css` for custom animations, design tokens, and components that are too complex for inline utilities.
- **Components**: Shared Astro components live in `src/components/`. Keep components DRY across different locales.
- **i18n**: The default locale is `en`. Other locales are `de` and `fr`. Ensure new pages are localized correctly by adding them to the corresponding directories under `src/pages/` or using the content collections in `src/content/`.
- **Formatting & Linters**: Follow the existing indentation and styling. Do not reformat files comprehensively unless specifically requested.

## Safety and Best Practices

- Do NOT commit changes directly unless requested.
- If you find an issue during development, empirically reproduce the failure before applying a fix.
- Test your changes using `npm run build` to ensure the static generation is successful.