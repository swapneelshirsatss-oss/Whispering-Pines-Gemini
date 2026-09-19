## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Google Site Name & SERP Branding Rules

Whenever updating site metadata, `Layout.astro`, or JSON-LD schemas:
- **`WebSite` Schema**: Set `name` to `"Whispering Pines Resort by Casa De Bello - Near Mukteshwar"`. Provide an `alternateName` array containing `["Whispering Pines Resort by Casa De Bello", "Whispering Pines Resort Mukteshwar", "Whispering Pines Resort near Mukteshwar", "Whispering Pines by Casa De Bello"]`.
- **OpenGraph `og:site_name`**: Ensure `<meta property="og:site_name" content="Whispering Pines Resort by Casa De Bello - Near Mukteshwar" />` is declared in `Layout.astro`.
- **Primary Address Format**: Always format the official property address as `"Malla Ramgarh, Bhowali-Ramgarh-Mukteshwar Rd, Mukteshwar, Nainital, Uttarakhand 263137"`.

## Google Business Profile (GBP) & NAP Standards

Whenever updating contact details, footer components, or local schemas:
- **Official Entity Name**: Set to `"Whispering Pines Resort by Casa De Bello"`.
- **Primary Address Format**: Always format as `"Malla Ramgarh, Bhowali-Ramgarh-Mukteshwar Rd, Mukteshwar, Nainital, Uttarakhand 263137"`.
- **Primary Phone Format**: Display `"075050 29696"` (with optional `(+91 75050 29696)` international notation), click-to-call `href="tel:+917505029696"`, and WhatsApp `https://wa.me/917505029696`.
- **Google Maps CID Link (No Shortlinks)**: Always reference `https://maps.google.com/?cid=8386667112972057918` in footer address links, component links, and JSON-LD `hasMap`. NEVER use `maps.app.goo.gl` shortlinks anywhere in the codebase to avoid breaking Google Knowledge Graph entity reconciliation.
- **Google Travel Entity**: Maintain link `https://www.google.com/travel/hotels/entity/ChgIvvqZseCp27F0GgwvZy8xaGR6ejNrcDcQAQ`.

## Generative Engine Optimization (GEO) & AI Discovery Standards

Whenever updating site layout, documentation, or robots directives:
- **LLM Knowledge Base Link**: Ensure `<link rel="alternate" type="text/markdown" href="/llms.txt" title="Whispering Pines Resort LLM Knowledge Base" />` is declared in `<head>` via `Layout.astro`.
- **AI Crawler Allowances in `public/robots.txt`**: Explicitly allow leading AI search engines (`GPTBot`, `ChatGPT-User`, `OAI-SearchBot`, `PerplexityBot`, `ClaudeBot`, `Google-Extended`, `Applebot-Extended`, `cohere-ai`). Block scraping data-harvesters (`Bytespider`, `CCBot`).
- **Synchronized LLM Data**: Keep `public/llms.txt` and `public/llms-full.txt` up-to-date with new landing pages, amenities, room configurations, and direct-booking channels.

## Astro Head Slot Scoping Rules

When injecting JSON-LD schemas, preloads, or custom scripts into page templates:
- **Top-Level `<Fragment slot="head">`**: Always place `<Fragment slot="head">` directly as an immediate child of the `<Layout>` component.
- **Never Nest Slots Inside Child Elements**: Never put `<script slot="head">` or `<link slot="head">` inside nested `<div>` or child wrapper blocks, as Astro will fail to route them to `<head>` and will instead render them in `<body>`.

## Core Brand USP & Strategic Positioning Rules

Whenever drafting page copy, meta tags, schemas, or hero sections:
- **Core USP — 180° Himalayan View From ALL Rooms**: The primary signature differentiator of Whispering Pines Resort is that **every single room and balcony** commands a direct, unobstructed 180° panoramic view of the Nanda Devi and Trishul Himalayan snow peaks. Never imply only select rooms have the view.
- **Leisure, Relaxation & Pure Unwinding First**: People travel to Whispering Pines for peace, crisp mountain air, slow living, and relaxation away from city stress. Do NOT make internet speed or workcation tech the headline hook. Wi-Fi is an ambient background convenience, not the primary reason to visit.
- **Great Variety of Delicious Food**: Champion the resort's culinary offerings: authentic regional Kumaoni cuisine, diverse multi-cuisine comfort menus, fresh farm-to-table organic ingredients, and nightly bonfires with live barbecue setups.
- **Unique Mountain Location**: Celebrate Malla Ramgarh's peaceful fruit bowl orchards (peaches, plums, apples, apricots) and tranquil pine ridge setting.

## Target Customer Personas & Feeder Corridors

Whenever designing landing pages, writing travel guides, or updating navigation/footer silos:
- **Target Personas**:
  - **Urban Families & Multi-Gen Groups**: Emphasize 3-BHK Alpine Villa (10 Pax), heated living quarters, and 180° Nanda Devi views from all bedrooms.
  - **Couples & Relaxation Seekers**: Highlight serene privacy, romantic sunrise peak views from bed, rich food variety, and starlit bonfire dinners.
  - **Leisure & Wellness Travelers**: Focus on slow living, crisp mountain air, orchard walks, pine forest tranquility, and unwinding.
  - **Pet Owners**: Highlight private enclosed orchard lawns and pet-welcoming cottage rooms.
  - **Weekend Escapes**: Target 6.5–7.5 hour drive searches from Delhi NCR.
  - **Legacy Guests**: Target former brand keywords (*"Clarks Exotica Ramgarh"*) highlighting upgraded Casa De Bello hospitality.
- **Primary Drive-To Corridor (6–8h)**: Delhi/South Delhi, Gurugram, Noida, Ghaziabad, Faridabad, Meerut, Agra, Lucknow, Kanpur, Chandigarh.
- **Secondary Metro Hubs**: Mumbai, Bengaluru, Kolkata, Pune, Ahmedabad, Surat (connecting via Pantnagar Airport PGH, IGI Airport DEL, Kathgodam KGM).
- **Distance & Transit Matrix**: Maintain verified route data in `src/data/transitMatrix.ts` and embed `DistanceTransitMatrix.astro` across location-sensitive landing pages.

## IndexNow & Instant Indexing Rules

- **IndexNow Protocol**: The site uses automated post-build IndexNow submission via `astro.config.mjs` (`indexNowIntegration()`) with verification key file `public/8f3d1b7e4a9c2d5e6f8a0b1c2d3e4f5a.txt`.
- **Primary XML Sitemaps**: Maintain references to `sitemap.xml`, `sitemap-index.xml`, `sitemap-website.xml`, and `sitemap-blog.xml` in `public/robots.txt`.
- **Sitemap Synchronization**: When adding a new core landing page, register it in `public/sitemap-website.xml`. When adding a new blog article, register it in `public/sitemap-blog.xml`.

## Blog Publishing & Synchronized Registry Rules

Whenever publishing a new blog article or travel guide:
1. **Page Creation**: Place the page at `src/pages/blog/<slug>.astro`. Always include:
   - Full JSON-LD schemas (`WebSite`, `BlogPosting`, `Resort`, `FAQPage`).
   - LCP hero image preload tag in `<Fragment slot="head">` with `fetchpriority="high"`.
   - Verified Host E-E-A-T banner (`Gaurav Pandey, Director`).
   - Mid-article and sticky WhatsApp direct-booking CRO conversion cards.
2. **Data Registry**: Add the post object to `src/data/blogPosts.tsx` (`BLOG_POSTS` array) with unique `id`, `slug`, `customUrl`, `title`, `excerpt`, `date`, and `imageUrl`.
3. **Sitemap**: Add the new page entry to `public/sitemap-blog.xml` with current `<lastmod>` and `<priority>1.0</priority>`.
4. **LLM Knowledge Base**: Register the new article in `public/llms.txt`.
5. **Google Docs Ingestion**: When given a Google Doc URL, fetch raw content via `https://docs.google.com/document/d/<DOC_ID>/export?format=txt`.

## Google "Add to Preferred Sources" Standards

- Domain: `whisperingpinesresort.in`
- Preferred source elements must be maintained in:
  - `src/layouts/Layout.astro` (head script & preconnects)
  - `src/components/FooterSection.astro` & `src/components/FooterSection.tsx` (brand footer column)
  - `src/components/Navbar.tsx` (mobile menu drawer)

## Image Rendering & SSR Standards

Whenever creating or modifying image components, galleries, or Astro islands:
- **Native Browser Lazy Loading**: Always render `<img>` tags directly into the SSR HTML output. Never suppress `<img>` tags during SSR using client-only `isInView` state guards, and never hide images behind JavaScript `onLoad` opacity transitions (`opacity-0` race conditions when cached by the browser).
- **Decoupled Container & Image Styling**: When using `LazyImage` or wrapper components, pass container layout classes to `className` (e.g. `w-full h-full`) and image styling to `imgClassName` (e.g. `w-full h-full object-cover transition-transform group-hover:scale-105`).
- **Interactive Overlays**: Always add `pointer-events-none` to color tints, hover overlays, or gradient masks on top of images so they do not obstruct clicks, taps, or modal triggers.

## Content Security Policy (CSP) & Cache Invariants

Whenever updating `public/.htaccess` or `public/_headers`:
- **Measurement Directives Invariant**: Never restrict `connect-src` or `script-src` without including Google Ads (`*.googleadservices.com`, `googleads.g.doubleclick.net`, `*.doubleclick.net`, `stats.g.doubleclick.net`), Google Tag Assistant (`tagmanager.google.com`), and Google endpoints (`www.google.com`, `*.google.com`).
- **HTML Cache Revalidation Invariant**: Always ensure `text/html` has `max-age=0, no-cache, no-store, must-revalidate`. Never allow global `ExpiresDefault` to apply 30-day caching to HTML files, ensuring that new deployments and header updates take effect without edge CDN lag.
- **Dual-Header Synchronization**: Maintain exact 1-to-1 directive parity between `public/.htaccess` and `public/_headers`.

## Direct Booking & WhatsApp CRO Standards

Whenever designing or refactoring direct booking pages, room cards, or conversion CTAs:
- **WhatsApp Visual Dominance**: All primary direct booking buttons must use authentic WhatsApp green (`#25D366` hover `#1EBE5D`), an animated concentric pulse ring, and explicit direct saving microcopy (*"Save 15–20% Direct • ⚡ < 5m reply"*).
- **Multi-Viewport Availability**:
  - **Desktop**: Maintain the persistent floating WhatsApp concierge pill at `bottom-6 right-6 z-50 hidden md:flex`.
  - **Mobile**: Maintain the mobile sticky bottom bar with WhatsApp highlighted as the hero CTA.
  - **Pre-Header**: Include a 1-click WhatsApp Concierge pill in the top resident privilege ribbon beside `{RESORT_PHONE_DISPLAY}`.
- **Dynamic Payload Synchronization**: Ensure the client-side JavaScript calculator updates the pre-filled WhatsApp message payload across `#btn-whatsapp-submit`, `#mobile-sticky-whatsapp`, and `#desktop-floating-whatsapp` simultaneously.
- **Conversion Measurement Invariant**: Every WhatsApp CTA click must fire `generate_lead` / `trackAdsConversion` to Google Ads and Google Tag Manager.
- **Google Ads Conversion Mapping Standards**:
  - **Account ID**: `AW-18226439390` initialized with `allow_enhanced_conversions: true` and `conversion_linker: true`.
  - **Phone Call Conversion Action**: `AW-18226439390/Vc_dCNLMo_UcEN7JhfND` mapped to phone number `7505029696`.
  - **Lead Conversion Mapping**: WhatsApp inquiries dispatch `generate_lead` + `conversion` (`AW-18226439390`) with dynamic estimated room value and currency `INR` for Smart Bidding / Target ROAS.
  - **Booking Engine Conversion Mapping**: BookingJini clicks dispatch `begin_checkout` + `conversion` (`AW-18226439390`).
  - **Attribution Persistence**: Capture `gclid`, `gbraid`, `wbraid`, and UTM parameters into `sessionStorage` on landing page arrival so attribution is preserved throughout the session and injected into WhatsApp payloads.

## Git & Version Control Rules

- **No Auto-Commit or Auto-Push**: Do NOT perform automatic git commits or git pushes (`git commit`, `git push`). Make all code edits directly in project files and present them for review. Only commit or push to Git when explicitly requested by the user.



