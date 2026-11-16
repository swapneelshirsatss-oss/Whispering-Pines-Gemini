# ARCHITECTURE — Whispering Pines Resort by Casa De Bello Website

Written 2026-11-16.

## Stack
Astro 7, React 19, Tailwind CSS v4.

## Hosting & Deployment
Static build packaged by `npm run package` (`dist_deploy.zip`). [TODO: confirm host and upload method]
Swapneel deploys. AI tools edit local files only.

## Commands
| Command | What it does |
|---|---|
| `npm run dev` | Preview on your computer |
| `npm run build` | Build to `dist/` |
| `npm run package` | Build and make the deploy zip |
| `npm run indexnow` | Submit URLs to IndexNow |

## Where Facts Live
Main data is in `src/data/hotelData.ts`, but the phone number is ALSO typed into about 39 files under `src/`. When a fact changes, search the whole `src` folder.

## Public Files for Search Engines
- `robots.txt`, `sitemap.xml`: keep them pointing at live pages only.
- `llms.txt`, `llms-full.txt`: AI-search fact sheets. Update them whenever a fact changes.
- IndexNow key file: leave it alone.
