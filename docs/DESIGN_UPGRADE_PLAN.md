# UI & Graphics Upgrade Plan — Whispering Pines Resort

**Status:** Draft for approval
**Date:** 2026-10-21
**Scope:** 74 source files, 21,819 lines, 137 image assets
**Goal:** Premium, minimal, free of generative-design tells — without losing SEO or conversions

---

## 1. The finding that reframes the job

This site is not missing a design system. It **has** one — and uses it zero times.

`src/styles/global.css` defines twelve colour tokens in an `@theme` block. Every one of them has **0 usages** across the codebase. Instead there are **4,199 hardcoded hex literals** spanning **75 distinct colours**.

```
--color-brand-green     0 uses        #1b3322   1,325 raw uses
--color-brand-gold      0 uses        #c9a832   1,168 raw uses
--color-brand-cream     0 uses        #faf9f6     423 raw uses
--color-earth-*  (6)    0 uses        + 71 other colours
```

So the work is not "add a design system." It is **make the existing one real and delete the drift.** That reframing matters because it turns most of this plan into mechanical find-and-replace with a compiler to catch mistakes, rather than subjective redesign.

The second finding is the one you can actually *see*, and it explains why the site reads as machine-made rather than expensive.

---

## 2. Audit results

### 2.1 Colour — no system in practice

| Metric | Now | Target |
|---|---|---|
| Distinct hex colours | **75** | 6 core + 3 functional |
| Hardcoded hex occurrences | **4,199** | ~0 (tokens only) |
| Design tokens actually used | **0 of 12** | all |

Two parallel palettes (`brand-*` and `earth-*`) both define a cream, a dark and a green. That guarantees drift even if tokens were adopted.

Drift hotspots — `blogPosts.tsx` (644 raw hexes), `book-now.astro` (440), `himalayan-view-resort-uttarakhand.astro` (347).

### 2.2 Typography — monospace is the house voice

| Typeface | Uses |
|---|---|
| **`font-mono`** | **433** |
| `font-display` | 203 |
| `font-sans` | 162 |

Monospace is used **more than the body and display faces combined.** Alongside it: **377 `uppercase`** and **371 letterspacing** utilities. JetBrains Mono in letterspaced caps is the single most recognisable generative-design tell, and it reads technical — the opposite of hospitality.

The size distribution is worse:

| Size | Uses |
|---|---|
| **`text-xs`** | **775** |
| `text-sm` | 443 |
| `text-base` | 225 |
| everything else (9 sizes) | 773 |

**`text-xs` is the most common text size on the entire site**, used 3.4× more than body copy. Luxury reads as generous type and whitespace; this site is built from tiny uppercase labels. Twelve sizes in use means no scale.

### 2.3 Geometry — no rhythm

- **Border radius:** 10 distinct values, 963 uses. `rounded-xl` (269), `rounded-full` (264), `rounded-2xl` (182) all used heavily and interchangeably. Pill-shaped everything is a layout fingerprint.
- **Vertical spacing:** 20 distinct `py-*` values. No modular scale.
- **Elevation:** 9 shadow variants, 448 uses — `shadow-sm` alone 240×. Four of them are the custom `shadow-luxury-*` set, barely used (31 total).

### 2.4 Decoration

- **34** `bg-gradient-to-*`, **28** `from-[hex]`, **24** `via-[hex]`
- **47** `backdrop-blur` — glassmorphism as a default, not a choice
- Already removed in the shipped Tier 1 pass: shimmer sweep, gold glow, 16 pulsing dots, 82 hover-grow classes

### 2.5 Components

- **71** distinct `lucide-react` icons (199 imports) **plus 77 hand-written inline `<svg>`** — two parallel icon systems, inconsistent stroke weight and sizing
- **3 duplicate components** maintained in two formats: `Breadcrumbs`, `DistanceTransitMatrix`, `Logo` (each `.astro` + `.tsx`)
- **2 dead files:** `FAQSchemaContact.astro`, `Logo.tsx` — never imported

### 2.6 Graphics

- **135 image files, 11.9 MB total.** Format discipline is good: 114 AVIF, 15 WebP.
- Two outliers at **844 KB each** — `Whispering-pines-balcony-view-nanital.webp` and `public/og-image.webp`
- The brand mark itself is strong: clean SVG, gold on green, scales well. **Keep it untouched.**

---

## 3. Design direction

Three principles, each falsifiable against the audit numbers above.

**1. Subtraction, not decoration.** Every "premium" signal currently on the site is something *added* — gold glow, shimmer, gradient text, glass pills. Actual luxury is what's removed. The Tier 1 pass was a net **−178 lines** and visibly improved the hero.

**2. Let the photograph carry it.** The hero image was at `opacity-40` under three scrims — a dark green rectangle where a Himalayan view should be. Photography is the most expensive asset here and should be the loudest element on every page.

**3. Facts out-perform adjectives.** `1,780 m`, `Nanda Devi and Trishul`, `apple, peach and plum`, `150 Mbps` are more persuasive than *curated*, *bespoke* or *breathtaking* — and they are already true.

---

## 4. The target system

### 4.1 Colour — 6 tokens

| Token | Hex | Role |
|---|---|---|
| `pine` | `#1B3322` | Primary dark, headers, footers |
| `pine-deep` | `#142619` | Dropdowns, over-dark layering |
| `cream` | `#FAF9F6` | Page ground |
| `ink` | `#2C3531` | Body text |
| `brass` | `#A6875D` | Accent — **replaces `#c9a832`** |
| `sand` | `#E6E0D6` | Hairlines, dividers |

Functional only, never decorative: `#25D366` WhatsApp, `#C27847` terracotta (call), one error red.

**The gold change is the biggest single visual upgrade in this document.** `#c9a832` is an acid yellow-gold that reads costume-jewellery at the sizes it's used (1,168 occurrences). `#A6875D` — already defined in your CSS as `--color-brand-gold-dark` — is a credible brass. One token, site-wide effect.

Merge `brand-*` and `earth-*` into one set. Delete the loser.

### 4.2 Type — 6 steps, two faces

| Step | Size | Use |
|---|---|---|
| Display | `clamp(2.5rem, 5vw, 4.5rem)` | Page H1 |
| H2 | `clamp(1.75rem, 3vw, 2.75rem)` | Section heads |
| H3 | `1.25rem` | Card titles |
| Body | **`1.0625rem`** | All paragraphs |
| Small | `0.875rem` | Captions, meta |
| Micro | `0.75rem` | Legal only — **hard cap ~40 uses** |

Rules:
- **Mono for numerals only** — tariffs, distances, phone numbers. Target: **433 → ~40**. Use the existing `.tnum` class.
- **Buttons and eyebrows move to Inter** with letterspacing, not JetBrains Mono.
- **`uppercase` 377 → under 60.** Caps for eyebrow labels only, never body or buttons.
- `text-xs` **775 → under 40.**

This is the highest-impact change in the document and the largest diff. It deserves its own commit.

### 4.3 Geometry

- **Radius: 2 values.** `4px` for cards, panels, buttons. `9999px` for genuine pills only (tags, the WhatsApp FAB). Everything else → `4px`. From 10 values to 2.
- **Spacing: a 4-step scale** — `py-16` / `py-24` / `py-32` for sections, `py-3` for controls. From 20 values to 4.
- **Elevation: 2 values.** A hairline border (`sand`) is the default separator; one soft shadow for genuinely floating elements (sticky bar, dropdown). Delete `shadow-luxury-lg`, `shadow-inner`, `shadow-2xl`. From 9 to 2.
- **Gradients: hero scrim only.** 34 → ~2. **`backdrop-blur` 47 → ~2** (sticky bar, nav on scroll).

### 4.4 Icons

Pick **lucide-react only**, `1.5px` stroke, two sizes (16/20). Convert the 77 inline SVGs — except the brand mark, the WhatsApp glyph and the Google "G", which must stay literal for recognition. Audit the 71 imported icons down to roughly 20; icon variety is itself a drift signal.

### 4.5 Photography

The system work above is mechanical. This is where judgement is needed, and it's what will actually make the site feel expensive.

- **One grade across all 137 images.** Currently they vary in warmth and contrast because they come from different shoots. A single consistent grade — slightly cool shadows, warm highlights, restrained saturation — binds the set.
- **Three aspect ratios, no more:** `16:9` hero, `4:5` portrait (rooms), `1:1` grid.
- **Stop overlaying photographs.** Tints, `mix-blend-multiply` and scrims should exist only where type sits on the image.
- **Art-direct the hero per breakpoint** — the 16:9 desktop crop loses the peaks on a phone. The `LazyImage` component already supports `mobileSrc`.
- **Compress the two 844 KB outliers** to AVIF at ~150 KB. The OG image does not need 844 KB.
- **Replace icon-in-a-circle with photography or type.** Decorative icon badges are a template signal; a resort has real pictures.

### 4.6 Motion

Already largely cleaned. Target state: opacity and 2–4px translate only, `200ms`, one easing curve. Keep the `group-hover:scale-105` photo zoom (24 uses) — a slow zoom on photography is editorial. Keep `prefers-reduced-motion`.

---

## 5. Phased plan

Ordered by **leverage ÷ risk**. Each phase is one commit, independently revertable.

| # | Phase | Scale | Risk | SEO |
|---|---|---|---|---|
| ✅ 0 | Decoration strip + copy *(shipped)* | −178 lines | — | verified 0 impact |
| 1 | **Colour tokenisation + brass** | ~4,199 edits | Low | None |
| 2 | **Typography** | ~1,200 edits | Medium | None |
| 3 | Geometry — radius, spacing, elevation | ~1,900 edits | Low | None |
| 4 | Components — dedupe, icons, dead code | ~90 edits | Low | None |
| 5 | **Photography & graphics** | 137 assets | Low | Positive |
| 6 | Motion polish | ~40 edits | Low | None |

### Phase 1 — Colour *(start here)*
Map all 75 hexes to the 6 tokens, swap `#c9a832` → `#A6875D`, merge the duplicate palettes, replace literals with Tailwind token classes. Purely mechanical, scriptable, verifiable by diffing rendered CSS. **Biggest visible change for the least judgement.**

### Phase 2 — Typography *(biggest impact, biggest diff)*
Purge mono to numerals, apply the 6-step scale, collapse `text-xs`. Touches ~1,200 call sites. Needs a visual pass per template afterwards — this is the one phase where a screenshot review is mandatory.

### Phase 3 — Geometry
Radius 10→2, spacing 20→4, shadows 9→2, gradients 34→2, backdrop-blur 47→2.

### Phase 4 — Components
Delete `FAQSchemaContact.astro` and `Logo.tsx`. Resolve the three `.astro`/`.tsx` twins to one each. Unify icons.

### Phase 5 — Photography
Grade pass, aspect-ratio normalisation, compress the two outliers, art-direct the hero. Hand work, but the highest *felt* quality gain.

### Phase 6 — Motion
Final consistency pass.

---

## 6. Guardrails

Carried forward from the shipped work, where two near-misses were caught only by diffing:

1. **Never touch SEO surfaces.** Title, meta description, canonical, H1–H3, `alt`, JSON-LD, anchor text, slugs. Strings that *look* like plain arrays can render as `<h3>` — three in `SEOServicesContent.astro` did. A blog `excerpt:` feeds `BlogPosting.description`.
2. **Verify by diffing rendered output, not by reading source.** The method: extract all 1,452 SEO surfaces from the 30-page build before and after, and diff. Non-negotiable for every phase.
3. **Never reword a genuine guest review.** Three real quotes live in `reviewBody` schema and `book-now.astro`.
4. **Never invent a fact.** Per client profile §3. Every number must trace to the profile or existing copy.
5. **One phase per commit**, on a branch, with a build between each.

---

## 7. What *not* to do

- **Don't redesign the layout.** The information architecture is sound. This is a materials-and-typography problem, not a structure problem.
- **Don't touch the logo.** It's the strongest asset on the site.
- **Don't add a component library, CSS-in-JS, or an animation library.** Everything here is deletion and token substitution.
- **Don't chase the 17 slop words in code comments.** Invisible to users and crawlers.
- **Don't do Phases 1 and 2 in one commit.** ~5,400 edits is unreviewable; a bad diff would be unbisectable.

---

## 8. Open questions

1. **Brass over gold** — `#A6875D` replacing `#c9a832` is the single biggest visual shift here. Approve before Phase 1 begins.
2. **Photography source** — is there a master library to re-grade from, or are the 137 web assets all that exist? Determines whether Phase 5 is a grade pass or a reshoot brief.
3. **Blog templates in scope?** `blogPosts.tsx` alone holds 644 raw hexes. Including it roughly doubles Phases 1–3.
4. **Review dates** — needed to finish attributing the genuine testimonials.

---

## 9. Recommendation

Run **Phase 1 next**. It is the largest visible gain for the least judgement, carries no SEO exposure, is fully scriptable, and the brass swap alone will change how the site feels more than anything else on this list.

Phase 2 is the one that structurally removes the generative-design signature — but it wants Phase 1 landed and reviewed first.
