---
name: whispering-pines-brand-editorial
description: Brand voice, author rules, canonical NAP, and booking conversion directives for Whispering Pines Resort by Casa De Bello.
---

# Whispering Pines Resort — Brand Editorial & Marketing Directives

This skill governs all content creation, blog writing, schema generation, and booking funnel copy for **Whispering Pines Resort by Casa De Bello**.

## 1. Brand Identity & Canonical Entity
- **Official Name**: Whispering Pines Resort by Casa De Bello - Near Mukteshwar
- **Official Address**: Malla Ramgarh, Bhowali-Ramgarh-Mukteshwar Rd, Mukteshwar, Nainital, Uttarakhand 263137
- **Google Verified Rating**: 4.6★ (409 verified Google reviews)
- **Google Maps CID**: `https://maps.google.com/?cid=8386667112972057918`
- **Google Travel Entity**: `https://www.google.com/travel/hotels/entity/ChgIvvqZseCp27F0GgwvZy8xaGR6ejNrcDcQAQ`
- **Official Contact**: Phone: `075050 29696` | WhatsApp: `+91 75050 29696`

## 2. Author & E-E-A-T Standards
- **Official Author for Blog & Travel Guides**: **`Gaurav Pandey`** (`Director — Whispering Pines Resort`).
- Never invent fictitious author names. Every article must include verified host E-E-A-T credentials and direct WhatsApp contact.

## 3. Customer Personas & Target Segments
- **Urban Families (Delhi-NCR drive corridor)**: Focus on the 3-BHK Alpine Villa (up to 10 Pax), fireplace heating, and 180° Nanda Devi snow peak views.
- **Workcationers**: Highlight 150 Mbps Fiber Wi-Fi, mountain desk setups, and quiet orchard work spaces.
- **Pet Owners**: Emphasize private enclosed apple orchard lawns and pet-friendly cottages.

## 4. Technical Publishing & SEO Rules
- All new blog posts must be registered in `src/data/blogPosts.tsx` and `public/sitemap-blog.xml`.
- Preload LCP hero image in `<Fragment slot="head">` with `fetchpriority="high"`.
- Use automated IndexNow submission for instant search indexing.
- Register all new pages and blog posts in `public/llms.txt` for Generative Engine Optimization (GEO).

## 5. Continuous Learnings & Engineering Standards
- **Strict Canonical Google Maps CID Link**: Never use shortlinks (`maps.app.goo.gl`) anywhere in code, components, or blog posts. Always use the canonical Google Maps CID link: `https://maps.google.com/?cid=8386667112972057918` to preserve Google Knowledge Graph entity reconciliation.
- **Astro Head Slot Scoping**: Always place `<Fragment slot="head">` as an immediate child of the `<Layout>` component. Never nest `<script slot="head">` inside nested `<div>` blocks, which causes Astro to render scripts into the `<body>`.
- **Generative Engine Optimization (GEO)**: Maintain the `<link rel="alternate" type="text/markdown" href="/llms.txt" />` discovery tag in `Layout.astro` and explicitly permit AI crawlers (`Applebot-Extended`, `cohere-ai`, `ClaudeBot`, `GPTBot`, `PerplexityBot`) in `public/robots.txt`.
- **Four-Sitemap Architecture**: Maintain both root index and segmented sitemaps (`sitemap.xml`, `sitemap-index.xml`, `sitemap-website.xml`, `sitemap-blog.xml`) in `public/robots.txt`.
- **Google Ads Conversion & Attribution Standards**:
  - **Account ID**: `AW-18455442099` with Google Tag initialized with `allow_enhanced_conversions: true` and `conversion_linker: true`.
  - **Verified Call Conversion Action**: `AW-18455442099/Vc_dCNLMo_UcEN7JhfND` mapped to phone number `7505029696`.
  - **Primary Canonical Landing Page**: `https://whisperingpinesresort.in/book-now/` is the official paid ads destination URL; `/book-direct/` must permanently 301-redirect to `/book-now/`.
  - **Universal Conversion Dispatcher**: Use `window.trackBookingConversion(action, category, label, extra)` across all CTAs to ensure synchronous dispatch to both Google Ads and GTM (`GTM-PL8FVLPX`).
  - **WhatsApp Attribution Tagging**: Automatically inject `sessionStorage` attribution into WhatsApp payloads so front desk staff can trace ad campaigns directly.
- **Global Hotel AggregateRating SERP Standard**: Maintain the official `Hotel` entity schema with `AggregateRating` inside `src/layouts/Layout.astro` (`ratingValue`: `"4.6"`, `reviewCount`: `"409"`, `bestRating`: `"5"`, `worstRating`: `"1"`). This guarantees Google Search Engine indexation and rich star snippets on SERPs across the entire website domain.
- **Review Count Synchronization Protocol**: Whenever the Google review count increases, update all 10 synchronized layers in a single pass:
  1. `src/layouts/Layout.astro` (Hotel AggregateRating JSON-LD)
  2. `src/data.ts` (`RESORT_INFO.rating.reviewCount` & `reviewCountNumeric`)
  3. `src/components/ResortLodgingSchema.astro` (Homepage Resort schema)
  4. `src/components/FooterSection.astro` (Footer Google badge & tooltip)
  5. `src/components/ReviewsHeader.astro` (Reviews page header pill)
  6. `src/components/SEOAboutContent.astro` (Trust section heading)
  7. Landing page schemas: `src/pages/book-now.astro`, `destination-wedding-uttarakhand.astro`, `corporate-offsite-resort-mukteshwar.astro`, `clarks-exotica-resort-ramgarh-mukteshwar.astro`, `about-whispering-pines-resort-ramgarh.astro`, `reviews.astro`
  8. Blog schemas and copy in `src/pages/blog/[slug].astro`, `src/data/blogPosts.tsx`, and standalone blog articles
  9. LLM Discovery files: `public/llms.txt` and `public/llms-full.txt`
  10. System rules: `AGENTS.md`

## 6. Direct vs OTA CRO Directives & Comparison Standards
- **Direct Booking Advantage Representation**: Whenever publishing high-intent pillar guides, accommodation overviews, or travel guides, integrate the `<DirectVsOtaTable />` component to highlight the 3 core direct perks:
  1. **Tariff**: Flat 20% Direct Savings (Zero OTA portal commission markup).
  2. **Room Allocation**: Priority 180° unobstructed Nanda Devi & Trishul balcony view upgrade.
  3. **Perks & Hospitality**: 100% Pet-friendly (₹0 pet surcharge) and flexible check-in coordinated directly with resident host Gaurav Pandey.
- **Placement Guidelines**:
  - On room and suite pages: Place `<DirectVsOtaTable />` immediately following the room inventory card list.
  - On pillar travel guides: Place `<DirectVsOtaTable />` right after the AEO direct answer block or editorial introduction.
- **Dedicated Pillar Route Architecture**: When a blog guide requires custom interactive Astro components (e.g. `DirectVsOtaTable.astro`), instantiate a dedicated page at `src/pages/blog/<slug>.astro` and define `customUrl: "/blog/<slug>/"` in `src/data/blogPosts.tsx` so `[slug].astro` avoids route conflicts.


