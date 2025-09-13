# House of Agile — Static Site

This is a lightweight, single‑file site for **houseofagile.com**. It’s optimized for GitHub Pages and easy to customize.

## Quick deploy (GitHub Pages)

1. Create a new repo (e.g. `houseofagile-site`) and push these files.
2. In **Settings → Pages**, select **Build and deployment: Deploy from a branch**, pick **main** and **root**.
3. (Optional) Custom domain: set your domain in **Settings → Pages → Custom domain** to `houseofagile.com`.
   - The `CNAME` file is already included.
   - Point your DNS to GitHub Pages per the official docs (A/AAAA records).
4. Visit your site once Pages finishes the first deploy.

## Customize

- Edit `index.html` content sections.
- Replace `assets/hoa-logo.svg` and `favicon.svg` with your own branding.
- Update contact links (email, LinkedIn, GitHub) in the footer and CTA.

## Notes

- Tailwind is loaded via CDN for simplicity (fast enough for a small brochure site).
- Add a PDF resume at `/Jean-Christophe-Meillaud-CV.pdf` if you want the “Download CV” button to work.
