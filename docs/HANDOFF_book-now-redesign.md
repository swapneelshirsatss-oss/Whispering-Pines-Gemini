# Handoff Spec: `/book-now/` visual redesign

**Status** — implemented, committed, **not merged**. Branch `design/book-now-green-fix`, commit `457718b`.
**Source of truth** — [`src/pages/book-now.astro`](../src/pages/book-now.astro). No Figma file exists for this page; every value below is read from the implementation, not from a design tool.
**Stack** — Astro 7 static output, Tailwind v4 (no config file; tokens live in the `@theme` block of [`src/styles/global.css`](../src/styles/global.css)), React 19 islands elsewhere on the site but **none on this page**.

---

## Overview

`/book-now/` is a paid-search landing page for the Mukteshwar ad group. Its single job is a phone call or a WhatsApp message to the front desk; online booking is the third option, not the first.

This redesign changes **surfaces only**. No copy, no tariffs, no tracking attributes, no page structure other than one added section. If your diff touches a `data-track-fn`, a price, or a phone number, something has gone wrong.

### Why it changed

The page read as flat, dead green. Three compounding causes, all measured before touching anything:

1. **Five off-palette darks** — `#03110B`, `#020B07`, `#051E14`, `#07261B`, `#03160E` — and **none** was brand pine `#0E2C21`. The page was darker and bluer than the navbar and footer it sat between, so the chrome looked borrowed from another site.
2. **Two of those darks were the same colour.** `#03110B` vs `#03160E` differ by ~5/255. They were adjacent sections, so Rooms and the OTA table read as one slab.
3. **`wp-pine-surface` was used zero times.** That class is the site's real green — grain + topographic contours + radial glow + vertical gradient — and the navbar, footer, sticky bar, festive popup and homepage all use it. This page used a bare `background-color`.

Surface order was `dark → dark → dark → light → dark → light`.

### What it is now

`dark → cream → sand → dark+photo → cream → textured pine → cream`

Four tones, one green, no two adjacent darks.

---

## Design tokens used

Tailwind v4 arbitrary values (`bg-[#FAF9F6]`) are used throughout this page rather than token classes, because the page predates the token block. **Values below are the tokens' values** — prefer the token name in any new work.

| Token | Value | Usage on this page |
|---|---|---|
| `--color-pine` | `#0E2C21` | Pull-quote band ground |
| `--color-pine-deep` | `#0A2118` | Pull-quote scrim gradient |
| `--color-cream` | `#FAF9F6` | Rooms, route, FAQ grounds |
| `--color-sand` | `#E6E0D6` | OTA comparison section ground |
| `--color-ink` | `#2C3531` | Body copy on cream and sand |
| `--color-brass` | `#B0966D` | Rules, borders, Book Online button, CTA outline |
| `--color-brass-light` | `#C4A77D` | Hover on pine; citation text |
| `--color-brass-ink` | `#7A6038` | Eyebrow labels and card tags **on light grounds** |
| `--color-brass-line` | `#8A6F4A` | Borders and hairlines only — **never text** |
| `--color-whatsapp` | `#25D366` | WhatsApp CTA |
| `--color-whatsapp-dark` | `#1EBE5D` | WhatsApp CTA hover |
| `--font-display` | Playfair Display, Georgia, serif | H1, H2, H3, pull-quote |
| `--font-sans` | Inter, system-ui | Body, all buttons, labels |

### Non-token values, and why

| Value | Where | Why not a token |
|---|---|---|
| `#03110B` | Hero ground + scrims | Pre-existing hero. Left alone deliberately: the hero is 90% photo, so re-grounding it is invisible and risks the H1 contrast. Candidate for a later cleanup. |
| `#FAF7F2` | Text on dark, ivory CTA fill | Pre-existing ivory, ~1 step off `--color-cream`. Used for the ivory Call button fill. |
| `#E5CFA0` | Call CTA hover | No token exists for it. Add one if it spreads. |
| `#44564E` | Secondary body on light | Mid-tone between `--color-ink` and brass-ink. Not tokenised. |
| `emerald-*` | "Save up to 20%" badge | Tailwind palette. See the contrast note under **Components**. |

---

## Layout

Tailwind v4 default breakpoints — `sm 640px`, `md 768px`, `lg 1024px`. No custom breakpoints.

| Section | Order | Ground | Vertical padding | Content width |
|---|---|---|---|---|
| Pre-header ribbon | 0 | `#020B07` | `py-2.5` | `max-w-7xl` |
| Hero | 1 | `#03110B` + photo | `min-h-[88svh]`, flex-centred | `max-w-5xl` |
| Rooms `#accommodations` | 2 | `#FAF9F6` | `py-20 lg:py-28` | `max-w-6xl` |
| OTA comparison | 3 | `#E6E0D6` | `py-20 lg:py-28` | `max-w-5xl` |
| **Pull-quote band** | 4 | `#0E2C21` + photo | `py-24 sm:py-32 lg:py-40` | `max-w-3xl` |
| Route / highway access | 5 | `#FAF9F6` | `py-20 lg:py-28` | `max-w-6xl` |
| Reserve calculator `#reserve` | 6 | `wp-pine-surface` | `py-20 lg:py-28` | `max-w-5xl` |
| FAQ | 7 | `#FAF9F6` | `py-20 lg:py-28` | `max-w-4xl` |

Gutters are uniform: `px-4 sm:px-6 lg:px-8`.

### `min-h-[88svh]` on the hero — do not change to `vh`

`svh` is the **small** viewport height, which excludes the mobile URL bar. With `vh`, the hero sized itself against the *collapsed* bar, so on first paint the H1 and the Call CTA sat below the fold until the user scrolled. That is the single most expensive layout bug possible on a call-first paid page. If you see `vh` here again, it is a regression.

---

## Components

### Room card (×4, data-driven)

Rendered by mapping `ROOM_CARDS` in the page frontmatter — **one template, four data objects.** Add a room by appending to the array, never by copying markup. Cards are ordered entry tariff → flagship (`₹3,999 → ₹15,999`) so mobile searchers see the cheapest first.

| Part | Spec |
|---|---|
| Grid | `grid-cols-1 md:grid-cols-2 gap-8` |
| Card | `bg-white`, `rounded-sm`, `shadow-md`, `border-[#8A6F4A]/25` |
| Featured variant | `border-[#8A6F4A]/40` + `ring-2 ring-[#B0966D]/45`. Driven by `featured: true` on the data object — currently only Deluxe Skylight Suite. |
| Image box | `relative h-64 overflow-hidden` — fixed height, so no CLS |
| Image | Astro `<Image>`, `widths={[400,700,900]}`, `sizes="(max-width: 767px) 92vw, (max-width: 1100px) 46vw, 420px"`, `quality={70}`, `format="webp"`, `loading="lazy"`, `decoding="async"` |
| H3 | `font-display text-2xl font-semibold` `#0E2C21` |
| Body | `text-sm` `#44564E` |
| Eyebrow | `text-xs uppercase tracking-[0.1em]` `#7A6038` |
| Tags | `text-xs` on `#FAF9F6` with `border-[#8A6F4A]/25` |
| Price | `font-sans text-xl sm:text-2xl font-bold` `#0E2C21` |
| Divider | `border-t border-[#8A6F4A]/15` |

**The "Save up to 20%" badge changed for a contrast reason, not a visual one.** It was `text-emerald-400` on `bg-emerald-500/10` — fine on near-black, fails WCAG AA on white. It is now `text-emerald-800` on `bg-emerald-50` with `border-emerald-700/30` (≈7:1). Do not revert it to the 400 weight on a light card.

### CTA buttons

Three ranks, in deliberate order. **Call is always rank 1 on mobile.**

| Rank | Fill | Text | Border | Hover |
|---|---|---|---|---|
| 1 Call Desk | `#FAF7F2` | `#03110B` | `border-2 #B0966D` | `#E5CFA0` |
| 2 WhatsApp | `#25D366` | `#FFF` | `border-white/20` | `#1EBE5D` |
| 3 Book Online | `#B0966D` | `#03110B` | none | `#C4A77D` |

Sizing — **`min-h-12` (48px) is a floor, not a suggestion.** It is there for Google's mobile tap-target guidance and PageSpeed's tap-target audit. Card CTAs are `min-h-12 py-3 px-3 text-xs`; hero CTAs are `py-4 px-5/6 text-sm`. Never put a tap target below 44px on this page.

Every CTA carries `data-track-fn="trackBookingConversion"` plus a `data-track-args` JSON array, consumed by `/js/click-tracking.js`. **There are zero inline `onclick` handlers and it must stay that way** — the CSP forbids inline handlers, so an `onclick` will silently fail in production while working in dev.

### Pull-quote band (new)

The page's only photographic text background. Mirrors the homepage `.lx-quote` pattern in [`src/components/home/LuxuryHome.astro`](../src/components/home/LuxuryHome.astro).

```
section  relative overflow-hidden bg-[#0E2C21] py-24 sm:py-32 lg:py-40
 ├─ <picture>  mobile source ≤768px, else desktop
 │   └─ img   absolute inset-0 object-cover opacity-50  loading="lazy" w=1600 h=1067
 ├─ scrim     absolute inset-0 bg-gradient-to-b
 │              from-[#0A2118]/70 via-[#0A2118]/45 to-[#0A2118]/80
 └─ blockquote relative z-10 max-w-3xl text-center
     ├─ p     font-display italic text-2xl sm:text-3xl md:text-4xl
     ├─ cite  not-italic text-xs uppercase tracking-[0.2em] #C4A77D
     ├─ p     text-sm #FAF9F6/85
     └─ a     rank-1 Call CTA
```

Asset: `view-from-resort-cloud-sea.jpg` → **7.3 KB mobile / 16.0 KB desktop** as WebP. It is lazy-loaded and below the fold, so **LCP is unaffected**; the hero preload stays at 35.3 KB mobile / 92.6 KB desktop.

**Photo substitution rule.** Of ~30 images in `src/assets/images/`, only about five are low-detail enough to sit behind type: `view-from-resort-cloud-sea`, `whispering-pines-balcony-valley-view`, `outside-view-from-resort-hotel`, and in `public/images/…` `himalayan-stargazing` and `malla-ramgarh-fruit-orchards`. The rest are interiors — beds, bathrooms, dining. Type over a photo of a bed is the fastest way to make a resort site look cheap. Interiors belong **inside cards**.

### FAQ accordion

Native `<details>`/`<summary>`. No JS, no island.

- `<summary>` `font-display text-base font-semibold` `#0E2C21`, `cursor-pointer`
- `+` marker rotates 45° via `group-open:rotate-45` — so "open" needs no JS state
- First item ships `open` so there is content above the fold of that section
- Answer body `text-sm` `#44564E`, separated by `border-t border-gray-100`

### Heading watermark (new)

Type-as-texture. Zero bytes, no asset.

```html
<span aria-hidden="true"
  class="pointer-events-none select-none absolute inset-x-0 -top-7
         font-display font-semibold text-[#0E2C21]/[0.05]
         text-[80px] sm:text-[128px] leading-none tracking-tight">1,780 m</span>
```

Its parent is `relative`; the eyebrow, H2 and rule are each given `relative` so they stack above it. `aria-hidden` + `pointer-events-none` + `select-none` keep it out of the accessibility tree, out of copy-paste, and out of hit-testing. At 5% opacity it must never be the only carrier of information.

---

## States and interactions

| Element | State | Behaviour |
|---|---|---|
| Call CTA | hover | fill `#FAF7F2` → `#E5CFA0` |
| Call CTA | active | `scale(0.98)` |
| WhatsApp CTA | hover | fill `#25D366` → `#1EBE5D` |
| Book Online CTA | hover | fill `#B0966D` → `#C4A77D` |
| Room card | hover | image only, `scale(1.05)` over 700ms `ease-out`; card itself does not lift |
| FAQ item | open | `+` rotates 45°, answer expands at native speed |
| Hero photo | — | static, no parallax, no Ken Burns |
| Pull-quote | — | static. Deliberate: it sits between two CTAs and motion there pulls attention off them |

No loading, error or empty states exist on this page. Everything is static HTML — there is no fetch, no form submission, no async anything. The only interactive JS is the room/date calculator in `#reserve`, which is unchanged by this work.

---

## Responsive behaviour

| Breakpoint | Changes |
|---|---|
| `≥1024px` | Section padding `py-28`; quote band `py-40`; room grid 2-up; card CTA row 2-up |
| `768–1023px` | Room grid still 2-up (`md:grid-cols-2`); section padding drops to `py-20` |
| `640–767px` | Room grid collapses to 1-up; card CTAs still 2-up (`sm:grid-cols-2`); hero CTAs become a row |
| `<640px` | Everything single column; card CTAs stack full-width; hero CTAs stack full-width; quote band `py-24`; watermark `text-[80px]`; quote photo swaps to the 800px source |

Mobile also gets the global `StickyDirectBookingBar` (Call + WhatsApp, `z-[9999]`, `md:hidden`), which the component offsets with `body { padding-bottom: 68px }`. **This page used to suppress it and ship its own duplicate bar; that is gone.** Do not re-add a page-level sticky bar.

---

## Edge cases

- **Long room names** — H3 wraps, no truncation, no `line-clamp`. `Private Villa (3-BHK, sleeps 10)` is the longest current string and fits two lines at 320px. A longer name wraps to three and grows the card; the grid is not height-matched, so one tall card does not stretch its neighbour.
- **Long tariff strings** — the price row is `flex items-end justify-between gap-2` with `shrink-0` on the badge. A 6-figure price wraps the badge below rather than overflowing.
- **Missing image** — `<Image>` fails to build, not at runtime. A broken import is a build error, which is the behaviour we want on a static site.
- **No JS** — the page is fully functional: every CTA is a real `<a href>` (`tel:`, `wa.me`, booking engine), and the FAQ is native `<details>`. Only conversion *tracking* and the `#reserve` calculator need JS.
- **Dark mode** — not implemented, not inherited. The page defines its own grounds; there is no `prefers-color-scheme` handling anywhere on the site.
- **International / longer strings** — the site is English-only. Tariffs use `₹` with Indian digit grouping (`15,999`), hardcoded in `ROOM_CARDS`, not `Intl.NumberFormat`.

---

## Animation / motion

| Element | Trigger | Animation | Duration | Easing |
|---|---|---|---|---|
| Room card image | card hover | `scale(1) → scale(1.05)` | 700ms | `ease-out` |
| All CTAs | hover | background colour | default (150ms) | default |
| All CTAs | active | `scale(0.98)` | default | default |
| FAQ `+` marker | `<details>` open | `rotate(45deg)` | default | default |
| Logo / nav | — | owned by `Navbar.tsx`, out of scope |

**Reduced motion is already handled globally** — `global.css` has a `@media (prefers-reduced-motion: reduce)` block that forces `animation-duration` and `transition-duration` to `0.01ms !important` on `*`, `*::before`, `*::after`. You do **not** need a per-component guard. You also must not add a long transition and assume it will be respected in some other way.

---

## Accessibility notes

**Contrast — verified by token documentation, not by measurement on this page.** `global.css` documents `--color-brass` at 4.81:1 on pine and `--color-brass-ink` at 5.61:1 on cream, both AA. The brass-ink-on-cream and ink-on-cream pairings therefore pass. The emerald badge was changed specifically to fix a failing pair.

**Two pairings are unmeasured and need a contrast check before merge:**

1. The pull-quote (`#FAF9F6`) over a 50%-opacity photo behind a 45–80% scrim. The gradient is weakest at mid-band (`/45`), which is exactly where the quote sits.
2. The hero H1 (`#FAF7F2`) now that the photo moved from 30% to 50% opacity. The radial scrim was closed from `from-transparent` to `from-[#03110B]/30` to compensate — note the old scrim was *fully transparent at dead centre*, i.e. directly under the H1, so it was working against legibility. Both numbers are reasoned from the compositing, not measured.

Other notes:

- **Heading order** is H1 → H2 per section → H3 per card. No levels skipped.
- **Focus order** follows DOM order, which matches visual order in every section. No `tabindex` anywhere on the page.
- **Focus ring** is global: `outline: 2px solid var(--color-brass)` in `global.css`. Do not remove it on the ivory CTA — brass on `#FAF7F2` is the one combination worth re-checking.
- **`<details>`** gives correct expand/collapse semantics and keyboard operation for free. Do not replace it with a div-and-JS accordion.
- **Decorative images** — the watermark is `aria-hidden="true"`. The hero and quote-band photos have descriptive `alt` because they depict the property; they are not purely decorative.
- **Icons** — all CTA SVGs are decorative and sit beside a real text label, so they need no `aria-label`. Keep the text label; do not reduce any CTA to an icon alone.
- **Tap targets** — `min-h-12` on card CTAs, `min-h-11` on ribbon pills. See **CTA buttons**.

---

## Review checklist before merge

- [ ] Hero H1 legible over the 50%-opacity photo at 320px, 768px and 1440px — **most likely value to need tuning**
- [ ] Pull-quote contrast measured against the scrimmed photo (target AA, 4.5:1)
- [ ] Focus ring visible on the ivory Call CTA
- [ ] No two adjacent dark sections after any further edits
- [ ] `npm run build` → 35 pages, 0 errors
- [ ] Greps still 0 in `dist/book-now/index.html`: `pool`, `stone cottage`, `25% off`, `09690194954`, `onclick=`
- [ ] Lighthouse mobile run — not yet performed anywhere in this work

## What this spec cannot tell you

There is no Figma file, so nothing here was cross-checked against a designer's intent — it documents what the code does. Nothing in this redesign was opened in a browser: the build passes and the byte counts are measured from `dist/`, but every visual and contrast judgement is reasoned from the compositing maths. The two items flagged above are where that distinction matters most.
