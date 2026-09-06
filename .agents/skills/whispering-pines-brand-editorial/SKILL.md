---
name: whispering-pines-brand-editorial
description: Brand voice, author rules, canonical NAP, and booking conversion directives for Whispering Pines Resort by Casa De Bello.
---

# Whispering Pines Resort — Brand Editorial & Marketing Directives

This skill governs all content creation, blog writing, schema generation, and booking funnel copy for **Whispering Pines Resort by Casa De Bello**.

## 1. Brand Identity & Canonical Entity
- **Official Name**: Whispering Pines Resort by Casa De Bello - Near Mukteshwar
- **Official Address**: Malla Ramgarh, Bhowali-Ramgarh-Mukteshwar Rd, Mukteshwar, Nainital, Uttarakhand 263137
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

