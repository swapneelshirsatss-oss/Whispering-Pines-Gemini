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
