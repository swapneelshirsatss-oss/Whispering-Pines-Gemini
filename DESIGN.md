# DESIGN.md — Whispering Pines Resort by Casa De Bello

Written 2026-11-16 from the live code (the Tailwind `@theme` block in `src/`). Use these token names, not new hex codes.

## Colours
| Token | Hex |
|---|---|
| `pine` | #0E2C21 |
| `pine-light` | #193F30 |
| `pine-deep` | #0A2118 |
| `cream` | #FAF9F6 |
| `ink` | #2C3531 |
| `sand` | #E6E0D6 |
| `brass` | #B0966D |
| `brass-light` | #C4A77D |
| `brass-ink` | #7A6038 |

## Fonts
Headings: Playfair Display · Body: Inter · Mono: JetBrains Mono

See also `docs/DESIGN_UPGRADE_PLAN.md`.

## Pine surfaces
Large pine areas (header when solid, mobile menu, footer, phone Call/WhatsApp bar, festive popup, dark homepage bands) use the `.wp-pine-surface` class in `src/styles/global.css`: a pine → pine-deep gradient with a pine-light lift at the top left, a 7% film grain (`public/textures/grain.svg`) and faint contour lines (`public/textures/contours.svg`). Do not set a flat `bg-[#0E2C21]` on new large dark areas; use the class. Buttons and small chips stay flat.

## Components
Reuse the existing components. Do not build a second version of anything that exists.

## Imagery
Real property photos only. WebP, width and height set, descriptive alt text.

## Do Not (GrowGuest standard)
- No hover zoom, lift or bounce on buttons, cards or icons. Hover changes colour only.
- No blinking or pulsing dots, and no glowing shadows.
- No decorative blurred circles behind sections.
- No pill badges above every heading; use a plain small-caps label.
- No made-up badges ("Guest Favorite", "Prime Spot", "Best Seller") unless the claim is proven.
- No fixed prices anywhere unless the client profile lists them.
- No new colours, fonts, radii or shadows outside the tokens above.
