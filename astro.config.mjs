// @ts-check
import { defineConfig } from 'astro/config';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import react from '@astrojs/react';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

/** @returns {import('astro').AstroIntegration} */
function masterSitemap() {
  return {
    name: 'master-sitemap-generator',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const distDir = fileURLToPath(dir);
        const indexPath = path.join(distDir, 'sitemap-index.xml');
        const masterPath = path.join(distDir, 'sitemap.xml');
        if (fs.existsSync(indexPath)) {
          fs.copyFileSync(indexPath, masterPath);
          console.log('[master-sitemap] Successfully created master sitemap.xml from sitemap-index.xml');
        }
      }
    }
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://whisperingpinesresort.in',
  trailingSlash: 'always',
  integrations: [
    react(),
    partytown({
      config: {
        forward: ['dataLayer.push', 'gtag'],
      },
    }),
    sitemap(),
    masterSitemap(),
  ],
  prefetch: true,

  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
              return 'vendor-react';
            }
            if (id.includes('node_modules/lucide-react')) {
              return 'vendor-icons';
            }
          }
        }
      }
    }
  }
});
