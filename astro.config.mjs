import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// TODO: Remplacez par votre vrai domaine quand disponible
const SITE_URL = 'https://killianperzo.dev';

export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    sitemap({
      i18n: {
        defaultLocale: 'fr',
        locales: {
          fr: 'fr-FR',
          en: 'en-US',
        },
      },
    }),
  ],
  site: SITE_URL,
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    }
  },
  redirects: {
    "/": "/fr"
  }
});