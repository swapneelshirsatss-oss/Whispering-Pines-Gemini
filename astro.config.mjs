// @ts-check
import { defineConfig } from 'astro/config';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import react from '@astrojs/react';
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
        if (process.env.SKIP_INDEXNOW) {
          console.log('[IndexNow] Skipped (SKIP_INDEXNOW is set).');
          return;
        }
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

        const endpoints = [
          { name: 'Central Gateway', url: 'https://api.indexnow.org/indexnow' },
          { name: 'Bing Direct', url: 'https://www.bing.com/indexnow' }
        ];

        console.log(`[IndexNow] Submitting instant indexing request for ${payload.urlList.length} pages...`);

        for (const ep of endpoints) {
          try {
            const res = await fetch(ep.url, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json; charset=utf-8' },
              body: JSON.stringify(payload)
            });
            if (res.ok || res.status === 200 || res.status === 202) {
              console.log(`[IndexNow] [${ep.name}] [OK] Instant URL indexing payload submitted successfully (HTTP ${res.status}).`);
            } else {
              console.log(`[IndexNow] [${ep.name}] Notification status HTTP ${res.status}`);
            }
          } catch (err) {
            console.warn(`[IndexNow] [${ep.name}] Ping deferred:`, err instanceof Error ? err.message : String(err));
          }
        }
      }
    }
  };
}

/**
 * Replaces the __CSP_SCRIPT_HASHES__ token in dist/_headers and dist/.htaccess with the SHA-256
 * hashes of every executable inline <script> in the built HTML, so script-src needs no 'unsafe-inline'.
 * @returns {import('astro').AstroIntegration}
 */
function cspScriptHashes() {
  const TOKEN = '__CSP_SCRIPT_HASHES__';
  /** @type {(dir: string) => string[]} */
  const listHtml = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) return listHtml(full);
    return e.name.endsWith('.html') ? [full] : [];
  });

  return {
    name: 'csp-script-hashes',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const { createHash } = await import('node:crypto');
        const distDir = fileURLToPath(dir);
        const hashes = new Set();
        for (const file of listHtml(distDir)) {
          const html = fs.readFileSync(file, 'utf8');
          for (const [, attrs, body] of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
            if (/\bsrc\s*=/i.test(attrs) || !body) continue;
            const type = attrs.match(/\btype\s*=\s*["']?([^"'\s>]+)/i)?.[1]?.toLowerCase();
            // Data blocks (JSON-LD etc.) are not executed, so CSP does not apply to them
            if (type && !['module', 'text/javascript', 'application/javascript'].includes(type)) continue;
            hashes.add(`'sha256-${createHash('sha256').update(body, 'utf8').digest('base64')}'`);
          }
        }
        const value = [...hashes].sort().join(' ');
        for (const name of ['_headers', '.htaccess']) {
          const target = path.join(distDir, name);
          if (!fs.existsSync(target)) continue;
          const src = fs.readFileSync(target, 'utf8');
          if (!src.includes(TOKEN)) continue;
          fs.writeFileSync(target, src.replaceAll(TOKEN, value));
          console.log(`[csp-script-hashes] Wrote ${hashes.size} inline script hashes to ${name}`);
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
    '/stay-near-mukteshwar-kainchi-dham': '/blog/stay-near-mukteshwar-kainchi-dham/',
    '/himalayan-view-resort-uttarakhand': '/blog/himalayan-view-resort-uttarakhand/',
    '/resort-near-mukteshwar': '/blog/resort-near-mukteshwar/',
    '/why-ramgarh-is-the-fruit-bowl-of-kumaon': '/blog/ramgarh-fruit-bowl-of-kumaon/',
    '/blog/why-ramgarh-is-the-fruit-bowl-of-kumaon': '/blog/ramgarh-fruit-bowl-of-kumaon/',
    '/ramgarh-fruit-bowl-of-kumaon': '/blog/ramgarh-fruit-bowl-of-kumaon/',
    '/blog/clarks-exotica-resort-ramgarh-mukteshwar': '/clarks-exotica-resort-ramgarh-mukteshwar/',
    '/about': '/about-whispering-pines-resort-ramgarh/',
    '/contact': '/contact-whispering-pines-resort-mukteshwar/',
    '/amenities': '/resort-amenities-mukteshwar/',
    '/services': '/resort-services-ramgarh/',
    '/experiences': '/things-to-do-near-mukteshwar/',
    '/stay': '/suites-cottages-ramgarh-resort/',
    '/rooms': '/suites-cottages-ramgarh-resort/',
    '/villa': '/private-villas-near-nainital/',
    '/villas': '/private-villas-near-nainital/',
    '/gallaery': '/gallery/',
    '/book-direct': '/book-now/',
  },
  integrations: [
    react(),
    sitemap({
      lastmod: new Date(),
      filter: (page) => !page.includes('/corporate-retreats-mukteshwar'),
    }),
    masterSitemap(),
    cspScriptHashes(),
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
