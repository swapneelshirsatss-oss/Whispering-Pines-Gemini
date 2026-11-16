# TESTING — Whispering Pines Resort by Casa De Bello Website

Run before every deploy. Write results in `STATE.md`.

## Fact Check
- [ ] Search for "stone cottage": zero results.
- [ ] Search for "23-13/4": zero results.
- [ ] Discount shows 25% everywhere.
- [ ] Address and Maps CID match the client profile.
- [ ] No `[TODO` text visible on any page.

## Pages
- [ ] Open the changed pages at phone width (375px) and desktop width. Nothing scrolls sideways.
- [ ] Call, WhatsApp and Book links work.

## SEO on Changed Pages
- [ ] Title ≤ ~60 characters, description ≤ ~155.
- [ ] One H1, canonical, OG image, alt text on every image.
- [ ] Schema passes https://search.google.com/test/rich-results

## After Deploy
- [ ] `robots.txt`, `sitemap.xml` and `llms.txt` load on the live domain.
- [ ] Submit changed URLs to IndexNow if the site has a script for it.
