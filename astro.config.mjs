import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";


import react from "@astrojs/react";


export default defineConfig({
  integrations: [tailwind(), react()],
  site: 'http://localhost:4321',
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    }
  },
  redirects: {
    "/": "/fr"
  }
});