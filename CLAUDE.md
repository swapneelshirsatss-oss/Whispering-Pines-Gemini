# CLAUDE.md — Whispering Pines Resort by Casa De Bello

Static marketing site for a resort in Malla Ramgarh (Mukteshwar Rd), Nainital, Uttarakhand.
SEO and direct-booking (WhatsApp) are the point of the site; nearly every rule below exists to protect one of those.

## Read before editing

1. `D:\AI-Skills-Vault\shared-context\client-profiles\whispering-pines.md` — ground truth for name, address, phone, Maps CID, rooms, offers. If it disagrees with the code, the profile wins; ask before changing either.
2. **`AGENTS.md`** — the full rule set (NAP/GBP, schema, GTM/Ads, CSP, GEO/llms.txt, IndexNow, blog publishing, CRO). It is the authority; this file does not repeat it.
3. `STATE.md` — where the last session stopped. Update it before saying "done".
4. `DESIGN.md` (tokens + "do not" list), then `docs/PRD.md`, `docs/ARCHITECTURE.md`, `docs/SEO_MARKETING.md`, `docs/TESTING.md`.

`.agents/AGENTS.md` is an older copy of the same rules and drifts — prefer root `AGENTS.md`.

## Stack

Astro 7 (static output, `trailingSlash: 'always'`) + React 19 islands + Tailwind v4 (via `@tailwindcss/vite`, no config file — tokens live in the `@theme` block in `src/styles/global.css`). Node 22.23.4+ (Astro 7.4.7+ refuses older Node), below 24. Sharp for images.

## Commands

| Command | What it does |
|---|---|
| `npm run dev` | Dev server on :4321. Prefer `astro dev --background`, managed with `astro dev stop / status / logs`. |
| `npm run build` | Build to `dist/`. **Pings IndexNow on every build** — set `SKIP_INDEXNOW=1` to suppress. |
| `npm run package` | Build + `dist_deploy.zip` via `scripts/package-deploy.mjs`. |
| `npm run indexnow [url]` | Submit URLs to IndexNow without a build. |

Build currently emits 36 pages (28 Nov 2026); a changed page count is a signal, not noise.

## Layout of the code

- `src/pages/**` — one `.astro` file per URL; filenames are the SEO slugs, so renaming a file changes a live URL (add a redirect in `astro.config.mjs` if you do). `src/pages/blog/[slug].astro` renders only posts in `BLOG_POSTS` **without** a `customUrl`; posts with one have their own hand-written page under `src/pages/blog/`.
- `src/layouts/Layout.astro` — every page's shell: GTM, attribution capture into `sessionStorage['wpr_ads_attribution']`, canonical/OG, Navbar, Footer, `StickyDirectBookingBar`. Props: `title`, `description`, `image?`, `noindex?`, `canonical?`, `breadcrumbs?`, `faqs?`. Pass `faqs` instead of hand-writing FAQPage JSON-LD.
- `src/components/` — `.astro` for static/SEO content and schema blocks, `.tsx` for interactive islands (`client:visible` / `client:idle`). Several names exist as both (`Breadcrumbs`, `Logo`, `DistanceTransitMatrix`) — check which one a page imports before editing.
- `src/data.ts` — the real content store: `RESORT_CONTACT`, `ROOMS_INVENTORY`, `GENERAL_AMENITIES`, `RESORT_SERVICES`, `LOCAL_EXPERIENCES`, `TESTIMONIALS`, `FAQS`, `CONTACT_FAQS`, `BOOKING_ENGINE_URL`, `generateWhatsAppLink()`.
- `src/data/hotelData.ts` — re-export façade over `src/data.ts` with friendlier names (`rooms`, `amenities`, `faqs`, `propertyDetails`, `hotelData`). Edit `src/data.ts`; nothing of substance lives here.
- `src/data/blogPosts.tsx` — `BLOG_POSTS` registry (JSX content allowed). `src/data/transitMatrix.ts` — verified distances/drive times.
- `src/types.ts`, `src/utils/analytics.ts` (`trackAdsConversion`, Ads IDs), `src/archived-pages/` (not routed, kept for reference).
- `public/` — `robots.txt`, `sitemap-website.xml`, `sitemap-blog.xml`, `llms.txt`, `llms-full.txt`, `.htaccess` + `_headers` (keep these two in exact parity), `casadebello/` subdomain stub (noindex), IndexNow key file (leave alone).

## Facts are duplicated — search, don't assume

`src/data.ts` is the canonical source, but the phone number, address, review count and room counts are also typed into ~39 files under `src/` plus `llms.txt`, `llms-full.txt` and JSON-LD blocks. When a fact changes, `grep -r` the whole `src/` **and** `public/` tree. Recent sweeps (review count 409→425, removing every "pool" mention) each touched 25+ files.

## Deployment

**Merging to `main` publishes the live site.** Hostinger's Git integration watches `main`, runs the build on its own servers and deploys `dist/` to whisperingpinesresort.in, typically 1–5 minutes after a merge. No manual upload is needed, and `npm run package` / `dist_deploy.zip` is only a fallback.

Verified 18 Nov 2026: `.github/workflows/deploy.yml` targets GitHub Pages, which is **not** enabled for this repo (the Pages API returns 404) — Hostinger is what actually serves the domain, so that workflow file is misleading.

Because a merge is a deploy: work on a branch, open a PR, and let Swapneel decide when to merge. **Never auto-commit or auto-push** without being asked.

## Approval & workflow

- **User confirmation required**: do not apply changes to content, pages or layout logic until the user reviews and confirms the proposed approach.
- Windows PowerShell 5.1: chain commands with `;`, not `&&`.
- Always keep the opening `---` fence at line 1 of an `.astro` file; dropping it turns frontmatter into JSX and breaks the build.

## Technical SEO guardrails

- **No duplicate content across routes.** Never ship the same full-length article or landing copy on two URLs (e.g. `/resort-near-mukteshwar/` vs `/blog/resort-near-mukteshwar/`). Differentiate, consolidate under one canonical URL, or set explicit canonicals. Old URLs are 301'd in `astro.config.mjs` — add new ones there and to the IndexNow exclusion set in the same file.
- Adding a page means: the `.astro` file, a sitemap entry (`sitemap-website.xml` or `sitemap-blog.xml`), and a line in `llms.txt`. Blog posts additionally need an entry in `BLOG_POSTS`. See AGENTS.md for the full checklist.
