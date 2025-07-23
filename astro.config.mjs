import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";


export default defineConfig({
  integrations: [tailwind()],
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
