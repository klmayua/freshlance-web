import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// Freshlance — Astro PWA deployed to Vercel (static build).
export default defineConfig({
  output: 'static',
  adapter: vercel(),
  site: 'https://freshlance.vercel.app',
  trailingSlash: 'ignore',
  build: {
    inlineStylesheets: 'auto',
  },
});
