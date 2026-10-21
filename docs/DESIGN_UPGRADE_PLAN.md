# Look, Feel & Design Plan — Whispering Pines Resort

**Status:** Phases 0–1 shipped. Phases 2–6 pending approval.
**Updated:** 2026-10-21
**Method:** static analysis of 74 source files (21,819 lines) plus a real-browser review of four live pages at 1280px.

---

## 1. Where the site stands now

Three passes have shipped on branch `refactor/remove-ai-slop-tier1`:

| | What changed | Evidence |
|---|---|---|
| **Decoration strip** | Shimmer sweep, gold glow, 16 pulsing dots, 82 hover-grow classes, gradient headlines, badge chrome | −178 lines |
| **Colour system** | One palette replacing two; acid `#c9a832` → a four-tone brass split by surface; green family moved to hue 165° and deepened | 2,793 substitutions |
| **Graphics** | Scrims switched from brand-green to near-neutral and eased; hero image un-masked; 17 hard divider bars → fading rules | Photography now keeps its own colour |

Two accessibility failures were fixed along the way that pre-dated this work: gold text on cream was **2.18:1**, and cream text on gold fills was **2.68:1**. Both were below AA on every page they appeared.

**The colour and graphics layer is now in good shape.** What remains is typography, geometry, and — the big one — page composition.

---

## 2. What the live pages actually look like

Static analysis cannot tell you a page feels cheap. These are observations from the rendered site.

### 2.1 `/resort-amenities-mukteshwar/` — the clearest problem on the site

Eight identical cards, on a **fully green background**, with **zero photography**. Each card is an icon in a rounded box, a Playfair heading wrapping to three or four lines, and three bullet points.

Three things are wrong at once:

1. **A resort is selling a pool, a fireplace and an orchard using clip-art icons and bullet points.** This is the single largest gap between what the property is and how the page reads. Luxury hospitality sells with photographs.
2. **Card soup.** Eight boxes of identical weight means nothing is more important than anything else, so the eye has nowhere to land.
3. **No tonal relief.** The whole section is green with no cream, which is exactly the over-green balance flagged during review.

### 2.2 `/suites-cottages-ramgarh-resort/`

- The price sits on the photograph as a **discount sticker** — `₹15,999/night`, struck-through `₹21,332`, and a green `Save ₹5,333 (25%)` pill. This is OTA grammar. A luxury property states a rate; it does not shout a saving over its own hero image.
- The eyebrow — *"COMPLETE ALPINE LUXURY WITH PRIVATE ORCHARD & FIREPLACE"* — wraps to **two lines of monospace caps**. An eyebrow is three or four words.
- The H1 runs to **five lines** at display size, with awkward breaks.
- Spec rows (`UP TO 9–10 ADULTS`, `3 GRAND KING BEDROOMS + PREMIUM LOFT`) are monospace caps — the site's default voice, and the wrong one.

### 2.3 `/gallery/`

- **Three images were broken**, rendering alt text on blank cards. Fixed in `bb9baeb`.
- Every tile carries a category pill (`Rooms & Suites`, `Dining & Restaurant`). Labels on every photograph is catalogue behaviour, not gallery behaviour.
- Heavy corner radius (`rounded-xl` / `2xl`) makes photographs read as app widgets rather than prints.
- **Grading is visibly inconsistent** — one interior is cool blue, the next is warm orange. This confirms the shoot-to-shoot variance suspected earlier; it is now observed, not inferred.

### 2.4 Shared chrome

The header and the sticky booking bar are in good shape after the recent passes. The sticky bar is dense but legible and earns its space.

---

## 3. The numbers that remain

| Metric | Now | Target |
|---|---|---|
| `font-mono` uses | **433** | ~40 (numerals only) |
| `font-sans` uses | 162 | the body voice |
| `uppercase` | **377** | under 60 |
| **`text-xs`** | **775** | under 40 |
| Font sizes in use | 12 | 6 |
| Border radii | 10 (963 uses) | 2 |
| Shadows | 9 (448 uses) | 2 |
| `py-*` values | 20 | 4 |
| `backdrop-blur` | 47 | ~2 |
| Inline `<svg>` | 77 + lucide | one icon set |

**`text-xs` is still the most-used text size on the site**, 3.4× more common than body copy, and monospace is still used more than the body and display faces combined. Letterspaced mono caps at 12px is the generative-design signature. Nothing else on this list matters as much.

---

## 4. Direction

**Subtraction, not decoration.** Every shipped win so far has been a deletion. The hero improved by removing scrims, not adding effects.

**Photographs are the product.** The property has 137 images and an orchard, a pool and a Himalayan view. Icons and bullet points should never stand where a photograph could.

**Facts out-perform adjectives.** `1,780 m`, `Nanda Devi and Trishul`, `150 Mbps`, `apple, peach and plum` — all true, all already written, all more persuasive than *spectacular* or *crystal-clear*.

**One voice.** Playfair Display for display, Inter for everything read, monospace for numbers only. The UI dataset ranks Playfair + Inter first for luxury hospitality, so the pairing stays; only its misuse goes.

---

## 5. Phases

Re-ordered by **felt impact**, not by size. This differs from the previous draft: page composition has moved ahead of geometry, because the amenities page costs more credibility than ten inconsistent corner radii.

| # | Phase | Scale | Risk | SEO |
|---|---|---|---|---|
| ✅ 0 | Decoration + copy | −178 lines | — | verified nil |
| ✅ 1 | Colour, green, graphics | 2,793 edits | Low | verified nil |
| **2** | **Typography** | ~1,200 edits | Medium | None |
| **3** | **Page composition** | 3–4 templates | Medium | Headings must be preserved |
| 4 | Geometry | ~1,900 edits | Low | None |
| 5 | Photography | 137 assets | Low | Positive |
| 6 | Components & icons | ~90 edits | Low | None |

### Phase 2 — Typography *(do first)*
Mono to numerals only, the 6-step scale applied, `text-xs` collapsed, `uppercase` cut to eyebrows. Touches ~1,200 call sites. **Needs a screenshot pass per template** — this is the one phase where the build passing proves nothing.

### Phase 3 — Page composition *(biggest felt gain)*
- **Amenities:** replace the eight-card grid with photography. Four to six amenities, each a real image with a short caption. Alternate cream and green sections for tonal rhythm.
- **Suites:** take the price off the image. State the rate in the body, once, as a fact. Shorten the eyebrow to three words. Cap the H1 at two lines.
- **Gallery:** drop the per-tile category pills, reduce the radius, let the grid breathe.

### Phase 4 — Geometry
Radius 10→2, spacing 20→4, shadows 9→2, `backdrop-blur` 47→2.

### Phase 5 — Photography
One grade across all 137 images. Three aspect ratios. Compress the two 844 KB outliers. Art-direct the hero per breakpoint.

### Phase 6 — Components & icons
One icon set at one stroke weight; convert the 77 inline SVGs except the brand marks. Resolve the three `.astro`/`.tsx` component twins. Delete the two dead files.

---

## 6. Guardrails

Carried from the shipped work, where each of these caught a real mistake:

1. **Never touch SEO surfaces** — title, meta, canonical, H1–H3, `alt`, JSON-LD, anchor text, slugs. Strings that look like plain arrays can render as `<h3>`; a blog `excerpt:` feeds `BlogPosting.description`. Both were caught only by diffing.
2. **Verify by diffing rendered output.** Extract all ~1,450 SEO surfaces from the 30-page build before and after, and compare. Non-negotiable.
3. **Measure contrast, don't assume it.** The original single-brass recommendation in this document failed AA and was only caught by testing. No single accent can pass on both pine and cream.
4. **Protect fixed-meaning colours** — Google's brand hexes, WhatsApp green, the terracotta call CTA. An automated pass swept the Google review mark into the green family once.
5. **Never reword a genuine guest review**, and never invent a fact.
6. **Crawl for broken images after asset work.** Three were live on `/gallery/`.
7. **One phase per commit**, on a branch, with a build between each.

---

## 7. What not to do

- **Don't redesign the information architecture.** It is sound. This is a materials, typography and composition problem.
- **Don't touch the logo.** It is the strongest asset on the site.
- **Don't change the typeface pairing.** Playfair + Inter is already the right answer; only its application is wrong.
- **Don't add a component library, CSS-in-JS, or an animation library.**
- **Don't combine Phases 2 and 4.** ~3,100 edits in one commit is unreviewable and unbisectable.

---

## 8. Open questions

1. **Photography for the amenities page** — are there existing shots of the pool, fireplace, orchard and dining room good enough to carry a redesign? Phase 3 depends on this answer more than on anything else.
2. **Master image library** — is there an ungraded original set, or are the 137 web assets all that exist? Decides whether Phase 5 is a grade pass or a reshoot brief.
3. **Printed collateral** — the green moved 13° in hue. If signage or print exists, check a sample before launch.
4. **Review dates** — still needed to finish attributing the genuine testimonials.

---

## 9. Recommendation

**Phase 2 next, then Phase 3.**

Typography is what structurally removes the machine-made signature, and it unblocks composition work: there is no point rebuilding the amenities page while card titles are still set in a display serif that wraps to four lines.

Phase 3 is where the site stops looking like a template and starts looking like a resort — but it needs an answer to question 1 first.
