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

/** @returns {import('astro').AstroIntegration} */
function indexNowIntegration() {
  const INDEXNOW_KEY = '8f3d1b7e4a9c2d5e6f8a0b1c2d3e4f5a';
  const HOST = 'whisperingpinesresort.in';
  const SITE_URL = 'https://whisperingpinesresort.in';

  return {
    name: 'indexnow-integration',
    hooks: {
      'astro:build:done': async ({ pages }) => {
        const urlList = (pages || [])
          .map(p => {
            const rawPath = p.pathname ? (p.pathname.startsWith('/') ? p.pathname : '/' + p.pathname) : '';
            if (!rawPath || rawPath.includes('404')) return '';
            return `${SITE_URL}${rawPath.endsWith('/') ? rawPath : rawPath + '/'}`;
          })
          .filter(Boolean);

        const list = Array.from(new Set(urlList));
        if (list.length === 0) return;

        const payload = {
          host: HOST,
          key: INDEXNOW_KEY,
          keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
          urlList: list
        };

        console.log(`[IndexNow] Submitting instant indexing request for ${payload.urlList.length} pages...`);

        try {
          const res = await fetch('https://api.indexnow.org/indexnow', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            body: JSON.stringify(payload)
          });
          if (res.ok || res.status === 200 || res.status === 202) {
            console.log(`[IndexNow] ✓ Instant URL indexing payload submitted successfully (HTTP ${res.status}).`);
          } else {
            console.log(`[IndexNow] Instant indexing notification status HTTP ${res.status}`);
          }
        } catch (err) {
          console.warn('[IndexNow] Ping notification deferred:', err.message);
        }
      }
    }
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://whisperingpinesresort.in',
  trailingSlash: 'always',
  redirects: {
    '/resort-near-mukteshwar': '/blog/resort-near-mukteshwar/',
    '/why-ramgarh-is-the-fruit-bowl-of-kumaon': '/blog/ramgarh-fruit-bowl-of-kumaon/',
    '/blog/why-ramgarh-is-the-fruit-bowl-of-kumaon': '/blog/ramgarh-fruit-bowl-of-kumaon/',
    '/ramgarh-fruit-bowl-of-kumaon': '/blog/ramgarh-fruit-bowl-of-kumaon/',
  },
  integrations: [
    react(),
    partytown({
      config: {
        forward: ['dataLayer.push', 'gtag'],
      },
    }),
    sitemap(),
    masterSitemap(),
    indexNowIntegration(),
  ],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        limitInputPixels: false,
      },
    },
  },
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
