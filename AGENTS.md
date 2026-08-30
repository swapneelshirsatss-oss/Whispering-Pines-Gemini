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

## IndexNow & Instant Indexing Rules

- **IndexNow Protocol**: The site uses automated post-build IndexNow submission via `astro.config.mjs` (`indexNowIntegration()`) with verification key file `public/8f3d1b7e4a9c2d5e6f8a0b1c2d3e4f5a.txt`.
- **Primary XML Sitemaps**: Maintain references to `sitemap.xml`, `sitemap-index.xml`, `sitemap-website.xml`, and `sitemap-blog.xml` in `public/robots.txt`.

## Blog Publishing & Synchronized Registry Rules

Whenever publishing a new blog article or travel guide:
1. **Page Creation**: Place the page at `src/pages/blog/<slug>.astro`. Always include:
   - Full JSON-LD schemas (`WebSite`, `BlogPosting`, `Resort`, `FAQPage`).
   - LCP hero image preload tag in `<Fragment slot="head">` with `fetchpriority="high"`.
   - Verified Host E-E-A-T banner (`Gaurav Pandey, Director`).
   - Mid-article and sticky WhatsApp direct-booking CRO conversion cards.
2. **Data Registry**: Add the post object to `src/data/blogPosts.tsx` (`BLOG_POSTS` array) with unique `id`, `slug`, `customUrl`, `title`, `excerpt`, `date`, and `imageUrl`.
3. **Sitemap**: Add the new page entry to `public/sitemap-blog.xml` with current `<lastmod>` and `<priority>1.0</priority>`.
4. **Google Docs Ingestion**: When given a Google Doc URL, fetch raw content via `https://docs.google.com/document/d/<DOC_ID>/export?format=txt`.

## Google "Add to Preferred Sources" Standards

- Domain: `whisperingpinesresort.in`
- Preferred source elements must be maintained in:
  - `src/layouts/Layout.astro` (head script & preconnects)
  - `src/components/FooterSection.astro` & `src/components/FooterSection.tsx` (brand footer column)
  - `src/components/Navbar.tsx` (mobile menu drawer)

## Git & Version Control Rules

- **No Auto-Commit or Auto-Push**: Do NOT perform automatic git commits or git pushes (`git commit`, `git push`). Make all code edits directly in project files and present them for review. Only commit or push to Git when explicitly requested by the user.
