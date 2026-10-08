// Regenerates the 1200x630 WebP social preview images in public/images/og/.
//
// Facebook, WhatsApp and LinkedIn crawlers cannot decode AVIF, so a page whose og:image
// points at an .avif shares with no preview image at all. On-page <img> tags should stay
// AVIF; only the og:image needs a WebP derivative. Run after adding or changing a hero:
//
//   node scripts/make-og-images.mjs
//
// The key of each entry is the page slug and becomes public/images/og/<slug>.webp.
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'public/images/og');

const OG_WIDTH = 1200;
const OG_HEIGHT = 630;
const MAX_KB = 300;

const SOURCES = {
  'best-resort-to-stay-near-mukteshwar': 'public/images/Best-resort-to-stay/Why-Whispering-Pines-is-the-Best-Resort-to-Stay-near-Mukteshwar.avif',
  'clarks-exotica-transition': 'public/images/Whispering-pines-balcony-view-nanital.avif',
  'himalayan-view-resort-uttarakhand': 'public/images/Himalayan-View-Resort-in-Uttarakhand/himalayan-view-resort-uttarakhand-whispering-pines-casa-de-bello-ramgarh-2026.avif',
  'resort-near-nainital': 'public/images/Resort_near-nainital-for-families.avif',
  'resort-stay-near-kainchi-dham': 'public/images/blog-resort-near-kainchi-dham-image/resorts-near-kainchi-dham-ashram-neem-karoli-baba-2026.avif',
  'stay-near-mukteshwar-kainchi-dham': 'public/images/Best-Stay-Near-Mukteshwar-and-Kainchi-Dham.avif',
  'winter-in-the-himalayas': 'public/images/What-Makes-Our-resort-Villas-Different-From-Regular-Homestays-Near-Mukteshwar-uttarkhand.avif',
  'clarks-exotica-resort-ramgarh-mukteshwar': 'public/images/clarks-exotica-resort-ramgarh-mukteshwar-whispering-pines-casa-de-bello-2026.avif',
  'corporate-offsite-resort-mukteshwar': 'public/images/banquest-hall-in-resort.avif',
  'destination-wedding-uttarakhand': 'public/images/destination-wedding/destination-weddings-uttarkahnd.avif',
};

const kb = (p) => fs.statSync(p).size / 1024;
const toOg = (input, output) =>
  sharp(input)
    .resize(OG_WIDTH, OG_HEIGHT, { fit: 'cover', position: 'centre' })
    .webp({ quality: 82, effort: 6 })
    .toFile(output);

fs.mkdirSync(outDir, { recursive: true });
let failed = 0;

for (const [slug, src] of Object.entries(SOURCES)) {
  const abs = path.join(root, src);
  if (!fs.existsSync(abs)) {
    console.error(`  MISSING SOURCE  ${slug} -> ${src}`);
    failed++;
    continue;
  }
  const out = path.join(outDir, `${slug}.webp`);
  const before = kb(abs);
  await toOg(abs, out);
  const after = kb(out);
  const over = after > MAX_KB ? `  OVER ${MAX_KB} KB` : '';
  if (over) failed++;
  console.log(`  ${slug.padEnd(42)} ${before.toFixed(0).padStart(5)} KB -> ${after.toFixed(0).padStart(4)} KB${over}`);
}

// The shared default og:image used by every page that does not set its own.
const def = path.join(root, 'public/og-image.webp');
if (fs.existsSync(def)) {
  const meta = await sharp(def).metadata();
  const before = kb(def);
  if (meta.width !== OG_WIDTH || meta.height !== OG_HEIGHT || before > MAX_KB) {
    // Rewritten in place from a buffer: on Windows, piping a file to itself (even via a
    // temp file and rename) fails with EPERM while sharp still holds the read handle.
    const resized = await sharp(fs.readFileSync(def))
      .resize(OG_WIDTH, OG_HEIGHT, { fit: 'cover', position: 'centre' })
      .webp({ quality: 82, effort: 6 })
      .toBuffer();
    fs.writeFileSync(def, resized);
    console.log(`  ${'og-image.webp (default)'.padEnd(42)} ${before.toFixed(0).padStart(5)} KB -> ${kb(def).toFixed(0).padStart(4)} KB   (${meta.width}x${meta.height} -> ${OG_WIDTH}x${OG_HEIGHT})`);
  } else {
    console.log(`  og-image.webp already ${OG_WIDTH}x${OG_HEIGHT} at ${before.toFixed(0)} KB`);
  }
}

if (failed) {
  console.error(`\n${failed} problem(s).`);
  process.exit(1);
}
console.log('\nAll social preview images are WebP at 1200x630.');
