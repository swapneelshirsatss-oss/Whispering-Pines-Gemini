// Verifies dist/ is safe to upload, then zips its contents (including .htaccess) to dist_deploy.zip.
// Usage: npm run package   (builds first; set SKIP_INDEXNOW=1 to skip the IndexNow ping)
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const zip = path.join(root, 'dist_deploy.zip');

const fail = (msg) => {
  console.error(`[package] ERROR: ${msg}`);
  process.exit(1);
};

for (const name of ['.htaccess', '_headers']) {
  const file = path.join(dist, name);
  if (!fs.existsSync(file)) fail(`dist/${name} is missing. Run a build first.`);
  const text = fs.readFileSync(file, 'utf8');
  if (text.includes('__CSP_SCRIPT_HASHES__')) fail(`dist/${name} still has the CSP hash placeholder.`);
  const scriptSrc = text.match(/script-src [^;"]*/)?.[0] ?? '';
  if (!scriptSrc.includes("'sha256-")) fail(`dist/${name} script-src has no inline script hashes.`);
  if (/unsafe-(inline|eval)/.test(scriptSrc)) fail(`dist/${name} script-src allows unsafe-inline/unsafe-eval.`);
}

fs.rmSync(zip, { force: true });
// bsdtar writes zips and includes dotfiles. On Windows use the built-in one, since Git Bash's GNU tar cannot write zips.
const tar = process.platform === 'win32'
  ? path.join(process.env.SystemRoot ?? 'C:/Windows', 'System32', 'tar.exe')
  : 'tar';
execFileSync(tar, ['-a', '-c', '-f', zip, '-C', dist, '.'], { stdio: 'inherit' });

const listing = execFileSync(tar, ['-tf', zip]).toString();
if (!/(^|\/)\.htaccess\s*$/m.test(listing)) fail('.htaccess is missing from the zip.');

console.log(`[package] OK: ${path.relative(root, zip)} (${(fs.statSync(zip).size / 1e6).toFixed(1)} MB). Extract its contents into public_html.`);
