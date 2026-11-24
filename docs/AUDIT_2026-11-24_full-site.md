# Full site audit — whisperingpinesresort.in

**Date** 24 Nov 2026 · **Method** real Chrome (Playwright) against the production build, every page rendered at **360×800 mobile** and **1440×900 desktop** — 34 real pages × 2 viewports = 68 renders, plus 22 redirect stubs checked separately.

**Why local, not live:** `whisperingpinesresort.in` serves a *"Checking your browser"* bot challenge to automated clients, so headless Chrome cannot reach it. Everything below is measured against `astro preview` on the deployed build. The live HTML was separately confirmed by `curl` to match.

---

## Health summary

| Area | Verdict |
|---|---|
| Indexability / canonicals | **Clean** — 0 missing, 0 accidental duplicates |
| Schema | **Strong** — 17 types, full coverage |
| E-E-A-T | **Strong** — author + dates on every post, citations everywhere |
| Conversion (SXO) | **Strong** — every page has an above-fold CTA |
| **Performance / page weight** | **Needs work** — median 691 KB mobile |
| **Layout stability (CLS)** | **Needs work** — 18 pages |
| Mobile ergonomics | Mixed — tap targets and small text |
| Asset hygiene | **Defects found** |

---

## What is already right (no action)

Verified, not assumed — worth knowing so nobody "fixes" it:

- **Canonicals**: 0 pages missing one. Every redirect stub cross-canonicals to its destination.
- **No duplicate content.** 22 old URLs exist as 0.3–0.5 KB `meta refresh` stubs with zero body copy, and **none is in `sitemap.xml`**. *(An automated crawl will report these as 15 duplicate-title clusters — Playwright follows the refresh and attributes the destination's content to the source URL. It is a crawler artefact. Do not "fix" it.)*
- **Titles / descriptions / H1**: 0 missing, 0 pages with multiple H1s, 0 with none.
- **Image alt text**: 0 images missing an `alt` attribute across all 34 pages.
- **Schema**: BreadcrumbList, Hotel, WebSite, WebPage on 33 pages; Resort 23; LodgingBusiness 15; **BlogPosting on 14 of 14 blog posts**. No parse errors.
- **E-E-A-T**: every blog post carries `author`, `datePublished` **and** `dateModified`. **0 of 34 pages have zero outbound citations.**
- **Conversion**: **0 pages lack a conversion CTA above the fold** on mobile — the global sticky bar guarantees it.
- **DOM size**: every page under 1,500 nodes (Lighthouse's warning threshold).

---

## Findings, by priority

### HIGH 1 — Mobile page weight

Median page is **691 KB** over the wire on mobile. Worst offenders:

| Page | Weight | Requests |
|---|---|---|
| `/blog/best-resort-to-stay-near-mukteshwar/` | **1,272 KB** | 43 |
| `/blog/resort-near-nainital/` | 1,185 KB | 43 |
| `/blog/resort-stay-near-kainchi-dham/` | 1,166 KB | 47 |
| `/blog/best-hotels-for-couples-in-mukteshwar/` | 999 KB | 41 |
| `/blog/` | 944 KB | 40 |
| `/destination-wedding-uttarakhand/` | 942 KB | 38 |

On a 4G connection in Nainital this is the difference between a 2-second and a 6-second load. Blog posts are the worst because they draw from `public/images/`, which **bypasses the Astro image pipeline entirely** — no responsive `srcset`, no per-viewport sizing. A phone downloads the same file a desktop does.

**Fix:** move blog imagery from `public/images/` to `src/assets/images/` and render with Astro `<Image>` + `widths`/`sizes`, as the room cards on `/book-now/` now do. That one change cut those cards from a single 900 px file to ~400 px on phones.
**Failure check:** re-run the crawl; median should fall below 450 KB.

### HIGH 2 — 843 KB OG image on all 35 pages

`dist/og-image.webp` is **843.8 KB** and referenced from every page. It is only fetched by social and chat scrapers, not ordinary visitors, so it does not hurt CWV — but it is 4–8× the size it should be, and some scrapers time out and fall back to no preview.
**Fix:** re-export at 1200×630, target under 200 KB.
**Failure check:** `stat` the file; paste a URL into WhatsApp and confirm the card renders.

### HIGH 3 — Images missing `width`/`height` on 18 pages (CLS)

| Page | Images without dimensions |
|---|---|
| `/gallery/` | **44 of 47** |
| `/destination-wedding-uttarakhand/` | 25 of 28 |
| `/` (homepage) | 15 of 34 |
| `/blog/` | 15 of 20 |
| `/things-to-do-near-mukteshwar/` | 10 of 13 |

Without intrinsic dimensions the browser cannot reserve space, so content jumps as each image arrives. `/gallery/` is close to a worst case.
**Fix:** add explicit `width`/`height` (or an `aspect-ratio` container) on every `<img>`. Astro's `<Image>` does this automatically — another reason to migrate off raw `<img>`.
**Failure check:** CLS under 0.1 in Lighthouse on `/gallery/`.

### MEDIUM 4 — Asset hygiene defects

1. **Five image files have raw spaces in their filenames**, referenced in HTML **unencoded** (not `%20`):
   - `/images/Best-resort-to-stay/Why-Whispering-Pines -is-the-Best-Resort-to-Stay-near-Mukteshwar.avif` — on the **homepage**, `/blog/` and a post
   - `/images/2027 New Year in the Himalayan Foothills.webp`
   - `/images/Hotels in Mukteshwar_ Temple Among Pines.webp`
   - `/images/Himalayan-View-Resort-in-Uttarakhand/Himalayan-View Resort-Uttarakhand with-Private-Villa.avif`
   - `…/Nanda-Devi-the-Best-Himalayan-View-Resort-in-Uttarakhand.png (2026).avif` *(also a double extension)*

   Browsers mostly tolerate this; CDNs, proxies and social scrapers often do not. **Renaming changes live image URLs**, so pair it with the `public/` → `src/assets/` migration above.

2. **`corporate-team-outing-conference-hall-india.jpg` is 855 KB and referenced by 0 pages.** A `.webp` sibling (139 KB) is the one in use. Dead weight in every deploy — delete it.

### MEDIUM 5 — Tap targets under 44 px

**1,412** across the site. Worst: `/blog/best-resort-to-stay-near-mukteshwar/` at 67 of 126 clickables.

**Important caveat:** most of these are **inline links inside prose**, which Google's mobile-usability guidance treats far more leniently than buttons and nav items. The number overstates the problem. Triage buttons, nav items and card CTAs first — the landing-page CTAs were already fixed to `min-h-12`/`min-h-14`.
**Failure check:** Lighthouse "Tap targets are sized appropriately" passes on one blog post.

### MEDIUM 6 — Text under 12 px

**658** elements site-wide. Worst: `/suites-cottages-ramgarh-resort/` (53), `/gallery/` (47), `/destination-wedding-uttarakhand/` (40). Mostly decorative eyebrows and captions. Lighthouse fails the legible-font audit when ≥40 % of text is small, so this is probably passing — but it is close enough to be worth a pass.

### MEDIUM 7 — Heading-order skips on 21 pages

Levels jumped (e.g. H2 → H4). Worst `/blog/himalayan-view-resort-uttarakhand/` with 2. Affects screen-reader navigation and weakens semantic structure for AI extraction.

### LOW 8 — SERP truncation

**5 titles over 60 characters**, including both ad landing pages:

| Page | Length |
|---|---|
| `/book-now/` | **72** |
| `/kainchi-dham-stay/` | **67** |
| `/blog/nainital-in-december/` | 66 |
| `/things-to-do-near-mukteshwar/` | 63 |
| `/corporate-offsite-resort-mukteshwar/` | 62 |

**7 descriptions over 160 characters** — `/book-now/` at 199 and `/kainchi-dham-stay/` at 187 are the worst. Both were written to spec in this session; the spec itself was over-length. `/kainchi-dham-stay/` is `noindex`, so its tags never appear in SERPs — ignore that one.

### LOW 9 — Horizontal scroll on one page

`/blog/hotels-in-mukteshwar/` scrolls sideways at 360 px. The only page of 34 that does.

### INFO 10 — FAQPage on 21 pages

Google **retired FAQ rich results for all sites on 7 May 2026**. These no longer earn a SERP feature. Per current guidance: **do not remove them** — there is no penalty, and the markup may still help AI answer engines parse the Q&A. Just do not expect SERP gains, and do not add FAQPage to new pages for that reason. Use `QAPage` for genuine user-generated Q&A.

---

## Results (measured after the fixes)

Median of 3 runs, real Chrome, 360x800, 4x CPU throttle, 1.6 Mbps / 150 ms.

| Page | LCP before | LCP after | CLS before | CLS after |
|---|---|---|---|---|
| `/` | 4,300 ms | **2,444 ms** GOOD | 0 | 0.0037 |
| `/gallery/` | 6,776 ms | **1,872 ms** GOOD | 0.0609 | **0** |
| `/book-now/` | 2,164 ms | 3,004 ms OK | 0.0151 | 0.0011 |
| `/blog/best-resort-to-stay-near-mukteshwar/` | 9,108 ms | **2,044 ms** GOOD | **0.1045** | **0** |

Every page now passes CLS. Three of four pass LCP; `/book-now/` sits in the 2.5-4 s band and varies run to run (2,152-3,284 ms).

### A correction to my own measurement

The first pass scrolled each page to provoke lazy-load shifts. Programmatic scroll does **not** finalise LCP, so below-fold images kept registering as candidates. That inflated `/book-now/` to 10,328 ms and misattributed its LCP to a room card. Re-measured without scrolling, `/book-now/` was already 2,164 ms and the mobile-first hero was working correctly. **Finding D was my artefact, not a site defect.** The `ASIDE` finding on `/gallery/` and the blog was real - that popup is `position: fixed` and genuinely in-viewport.

### What was changed

1. **`og-image.webp`: 6000x4000 / 844 KB -> 1200x630 / 85 KB.** A full-resolution camera export was serving as the social card.
2. **Deleted two orphan images** (`corporate-team-outing-conference-hall-india.jpg` + `.webp`, 993 KB). Zero references in `src/` and in built `dist/`. Removed with `git rm`.
3. **`contours.svg`: 37.1 KB -> 6.1 KB.** 28 polyline paths stepping in 1-unit increments, simplified with Douglas-Peucker at tolerance 3.5 and re-encoded as relative segments. 79% of points removed; at the real `stroke-opacity: .055` the difference is not visible. Benefits the footer, navbar and sticky bar too.
4. **Festive popup no longer uses `.wp-pine-surface`.** It unhides at 4 s, and its background *image* made it the page's Largest Contentful Paint. Replaced with pure CSS gradients - gradients are not LCP candidates, background images are. **This was the single biggest win**: `/gallery/` 6.8 s -> 1.9 s, the blog post 9.1 s -> 2.0 s.
5. **Metric-matched fallback faces for Playfair Display and Inter.** The webfonts arrived ~10 s under throttling and reflowed the page: Playfair added a line to the h1, and Inter's shorter ascent grew the byline row, pushing everything below down 28 px. Both now have `@font-face` stand-ins with `size-adjust` / `ascent-override` tuned empirically. Blog CLS 0.1045 -> 0.

**Caveat on the font fix:** the overrides were tuned against the fallback that actually resolves in desktop Chrome, not computed from Georgia's published metrics - Chrome did not honour the `local("Georgia")` lookup, and Android has neither Georgia nor Segoe UI. The values are therefore an approximation that is best on desktop and only partially right on Android. Re-tune by comparing canvas `measureText` widths against the real webfont.

### Still open

- **`/book-now/` LCP 2.5-3.3 s.** The hero mobile image is a single fixed-width 760 px WebP with no `srcset`; room cards are fixed 900 px. Scoped responsive images would help.
- **Five image filenames contain raw spaces**, referenced unencoded. Renaming changes live URLs.
- **Five titles over 60 characters** (skip `/kainchi-dham-stay/`, it is `noindex`).
- **Heading-order skips on 21 pages**, tap targets, sub-12 px text, horizontal scroll on `/blog/hotels-in-mukteshwar/`.
- **No field data.** Everything here is synthetic. CrUX and Search Console remain the real scoreboard.

---

## Limits of this audit

- **No Lighthouse or PageSpeed run, and no CrUX field data.** Page weight, DOM size and element geometry are measured; **LCP, INP and CLS scores are not.** Byte counts are a good proxy for LCP and missing dimensions a good proxy for CLS, but they are proxies.
- **Local build, not the live site** — the bot challenge blocks automated access. If LiteSpeed serves a stale cache, live could differ.
- **Two viewports only** (360×800, 1440×900). No tablet.
- **No off-page analysis**: no backlinks, no GSC/GA4 data, no SERP positions, no competitor comparison. Those need API credentials that are not connected here.
- **Rendering was measured, not judged.** The crawler reports geometry and markup; it cannot tell you a page looks wrong. Only `/book-now/` and `/kainchi-dham-stay/` were viewed as screenshots.
