// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// Site URL & base path are env-overridable so the same source can be deployed
// to Vercel (production: cuoreristopizza.it) or to GitHub Pages (preview: /cuore-ristopizza)
const site = process.env.PUBLIC_SITE_URL ?? 'https://cuoreristopizza.it';
const base = process.env.PUBLIC_BASE_PATH ?? '/';
const isGhPages = process.env.PUBLIC_DEPLOY_TARGET === 'gh-pages';

export default defineConfig({
  site,
  base,
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
  // Vercel adapter only when not deploying to GH Pages
  ...(isGhPages ? {} : { adapter: vercel() }),
});
