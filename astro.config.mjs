import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://houseofagile.com',
  output: 'static',
  server: { port: 8001 },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          de: 'de',
          fr: 'fr',
        },
      },
    }),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'fr'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
