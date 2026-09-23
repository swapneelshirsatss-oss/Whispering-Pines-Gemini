// @ts-check
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const INDEXNOW_KEY = '8f3d1b7e4a9c2d5e6f8a0b1c2d3e4f5a';
const HOST = 'whisperingpinesresort.in';
const SITE_URL = 'https://whisperingpinesresort.in';

const ENDPOINTS = [
  { name: 'IndexNow Central Gateway (Bing, Yandex, Seznam, Naver)', url: 'https://api.indexnow.org/indexnow' },
  { name: 'Bing Webmaster Direct Endpoint', url: 'https://www.bing.com/indexnow' }
];

/**
 * Extracts URLs from XML sitemap string
 * @param {string} xml 
 * @returns {string[]}
 */
function extractUrlsFromXml(xml) {
  const matches = xml.match(/<loc>(https?:\/\/[^<]+)<\/loc>/g) || [];
  return matches.map(m => m.replace(/<\/?loc>/g, '').trim());
}

async function getUrlList() {
  // If specific URLs are passed via command line arguments
  const cliArgs = process.argv.slice(2).filter(arg => arg.startsWith('http://') || arg.startsWith('https://'));
  if (cliArgs.length > 0) {
    return Array.from(new Set(cliArgs));
  }

  const urls = new Set();

  // Try reading dist/sitemap-0.xml first
  const distSitemap0 = path.join(rootDir, 'dist', 'sitemap-0.xml');
  if (fs.existsSync(distSitemap0)) {
    const xml = fs.readFileSync(distSitemap0, 'utf8');
    extractUrlsFromXml(xml).forEach(u => urls.add(u));
  }

  // Also check public/sitemap-blog.xml and public/sitemap-website.xml
  const publicBlog = path.join(rootDir, 'public', 'sitemap-blog.xml');
  if (fs.existsSync(publicBlog)) {
    const xml = fs.readFileSync(publicBlog, 'utf8');
    extractUrlsFromXml(xml).forEach(u => urls.add(u));
  }

  const publicWebsite = path.join(rootDir, 'public', 'sitemap-website.xml');
  if (fs.existsSync(publicWebsite)) {
    const xml = fs.readFileSync(publicWebsite, 'utf8');
    extractUrlsFromXml(xml).forEach(u => urls.add(u));
  }

  return Array.from(urls).filter(u => !u.includes('404'));
}

async function runIndexNow() {
  console.log('======================================================');
  console.log('  Fast Indexing & SEO Velocity — IndexNow Dispatcher  ');
  console.log('======================================================');

  const urlList = await getUrlList();
  if (urlList.length === 0) {
    console.error('[FAIL] No URLs found to submit. Ensure sitemap files exist or pass URLs as arguments.');
    process.exit(1);
  }

  console.log(`[INFO] Host: ${HOST}`);
  console.log(`[INFO] Key Location: ${SITE_URL}/${INDEXNOW_KEY}.txt`);
  console.log(`[INFO] Target URL Count: ${urlList.length}`);
  console.log('------------------------------------------------------');
  urlList.slice(0, 5).forEach((u, i) => console.log(`  ${i + 1}. ${u}`));
  if (urlList.length > 5) {
    console.log(`  ... and ${urlList.length - 5} more canonical URLs.`);
  }
  console.log('------------------------------------------------------');

  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: urlList
  };

  let allSuccess = true;

  for (const endpoint of ENDPOINTS) {
    process.stdout.write(`[DISPATCH] Submitting to ${endpoint.name}... `);
    try {
      const response = await fetch(endpoint.url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify(payload)
      });

      if (response.ok || response.status === 200 || response.status === 202) {
        console.log(`[OK] (HTTP ${response.status})`);
      } else {
        const text = await response.text().catch(() => '');
        console.log(`[STATUS ${response.status}] ${text.slice(0, 80)}`);
        allSuccess = false;
      }
    } catch (err) {
      console.log(`[FAIL] Connection error: ${err instanceof Error ? err.message : String(err)}`);
      allSuccess = false;
    }
  }

  console.log('======================================================');
  if (allSuccess) {
    console.log('[SUCCESS] All IndexNow endpoints notified. Crawlers alerted for rapid indexing.');
  } else {
    console.log('[COMPLETE] Submissions finished with some endpoint warnings.');
  }
  console.log('======================================================\n');
}

runIndexNow().catch(err => {
  console.error('[FATAL]', err);
  process.exit(1);
});
