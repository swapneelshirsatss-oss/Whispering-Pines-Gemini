# Header call CTA: editor prompt (20 Nov 2026)

## Why
- Desktop header phone is 11px, weight 400, 85% opacity, 97x17px tap area, next to a gold "Book Stay" button.
- Below lg width the header number is hidden (`hidden lg:flex`); it only shows inside the collapsed mobile menu.
- Shown as "075050 29696"; "+91 75050 29696" reads as a mobile number. Link `tel:+917505029696` is correct.

## Prompt

```
Edit the shared Header component of the Whispering Pines Astro site. Do not change any other component, page, title, meta, H1 or schema.

1. DESKTOP (lg and up)
- Turn the header phone link into a visible call button placed immediately LEFT of "Book Stay".
- Text: "Call +91 75050 29696" with the existing phone icon. href stays tel:+917505029696.
- Style: 14px, font-weight 600, text #FAF9F6 at full opacity, 1px border #B0966D, transparent background, same height and padding as the "Book Stay" button, border-radius 4px (same as Book Stay). Hover: background #B0966D, text #0E2C21.
- "Book Stay" stays the gold filled primary button; the call button is the outlined secondary.

2. MOBILE AND TABLET (below lg)
- Show a phone icon button in the header bar, left of the menu toggle, always visible (remove the hidden class for it).
- Tap target at least 44x44px, icon #B0966D, aria-label "Call Whispering Pines on +91 75050 29696", href tel:+917505029696.
- Keep the existing mobile bottom bar (Call + WhatsApp) unchanged.

3. NUMBER FORMAT EVERYWHERE
- Replace the visible text "075050 29696" with "+91 75050 29696" in the header, mobile menu and footer. Remove the duplicate "(+91 75050 29696)" in the mobile menu.

4. TRACKING
- Add data-cta="call_header" to the header call button and the mobile header icon so GA4 can track header calls separately from the bottom bar.

List the files you changed and confirm the build passes.
```

## Check after deploy
- GA4: count clicks with data-cta="call_header" vs bottom-bar Call. Keep the header button if it gets more than a few calls a week.
- Optional: add call hours under the button once confirmed.
