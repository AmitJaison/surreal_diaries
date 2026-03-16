# Portfolio Visual Overhaul — Refined Editorial
**Date:** 2026-02-26
**Approach:** A — Refined Editorial
**Scope:** All sections except Hero (preserved as-is)

---

## Decisions

| Topic | Decision |
|---|---|
| Theme | Warm cream (existing palette kept) |
| Identity weight | Engineer-first — Work section leads |
| Stories section | Keep as cross-platform feed |
| Work layout | Dense compact grid (3-col desktop) |

---

## Design Principles

- **Recurring motif**: Horizontal rule lines (`1px solid rgba(20,20,20,0.12)`) divide and anchor every section
- **Chapter labels**: Each section opens with a small-caps Instrument Sans label (e.g. `01 / VISUAL STORIES`) in burnt orange above the serif headline
- **Sharp edges**: No border-radius on images or cards — photographic/editorial feel
- **Burnt orange**: Used precisely — chapter labels, hover states, active nav indicators, submit button
- **Grain texture**: 3–5% CSS SVG noise overlay on body for tactile warmth
- **Consistent rhythm**: Every section has 10rem top/bottom padding and a full-width rule at top

---

## Global Design Tokens (additions to existing)

```css
--rule-line: 1px solid rgba(20, 20, 20, 0.12);
--section-padding: 10rem 0;
--chapter-label-size: 0.75rem;
--chapter-label-tracking: 0.15em;
```

- Add SVG grain filter texture overlay on `body` via `::after` pseudo-element (pointer-events: none, opacity: 0.04)

---

## Section Designs

### Navigation
- Logo: `Amit Jaison` in Cormorant italic, slightly larger (~1.3rem)
- Links: Instrument Sans small-caps with animated burnt orange dot/underline indicator on hover/active
- Scroll state: `rgba(245,243,239,0.92)` background + `backdrop-filter: blur(12px)` + `1px` bottom rule
- Mobile overlay: fullscreen, links in Cormorant `3.5rem` with staggered Framer Motion entrance, each row separated by thin rule lines

### FeaturedTrips — "Visual Stories"
- Chapter label: `01 / VISUAL STORIES`
- Full-width rule beneath section header
- Cards: remove border-radius (sharp edges)
- Overlay: location in all-caps tracking, title in Cormorant `1.75rem`
- Hover: `3px` burnt orange line animates in at card bottom edge
- Below grid: right-aligned `View all journeys →` with animated underline

### Work — "Selected Work"
- Chapter label: `02 / SELECTED WORK`
- Grid: 3 cols desktop / 2 cols tablet / 1 col mobile, `1rem` gap
- Card anatomy:
  - Sharp corners, `1px` `--border-light` border
  - Image: top 55%, no radius, scales `1.04` on hover
  - Bottom 45%: cream bg, Cormorant title `1.4rem`, burnt-orange outlined tag pills, Instrument Sans description `0.85rem`
  - Hover: card lifts with `box-shadow: 0 12px 40px rgba(0,0,0,0.1)`, `ArrowUpRight` icon slides in
- Staggered viewport entry animation (tightened easing)

### Stories — "Stories & Notes"
- Chapter label: `03 / STORIES & NOTES`
- Layout change: card grid → full-width horizontal row list
- Each row: `platform icon + title` (Cormorant `1.5rem`) left / `date` right
- Separated by `1px` rule lines beneath each row (table-of-contents style)
- Hover: title shifts burnt orange, thin orange rule slides in from left
- Platform label + date in Instrument Sans small-caps

### About
- Chapter label: `04 / ABOUT`
- Headline: Cormorant `4rem`, spans full width
- Full-width edge-to-edge image between headline and body text (no container padding), subtle parallax via Framer Motion `useScroll`
- Body text: single column, max-width `640px`, generous paragraph spacing
- Desktop aside (right-aligned): 3 quick-facts with burnt orange labels — `Based in`, `Currently at`, `Available for`

### Contact
- Chapter label: `05 / CONTACT`
- Large centered Cormorant headline `5rem`: "Let's build something meaningful"
- `● Available for new projects` badge centered below
- Social links: horizontal `icon + label` pairs separated by `·` dots
- Form: borderless inputs with bottom `1px` rule only (no box borders)
- Submit button: full-width solid burnt orange, Instrument Sans caps

### Footer
- Three-column: logo (Cormorant italic) left / nav links center / copyright right
- Full-width rule line above
- Instrument Sans `0.8rem`, `--text-muted`

---

## Preserved

- Hero section: untouched
- Color palette: `--bg-primary`, `--text-primary`, `--accent-primary` all unchanged
- Font stack: Cormorant + Instrument Sans
- Framer Motion animation infrastructure

---

## Files to Modify

| File | Change |
|---|---|
| `src/app/globals.css` | Add grain overlay, rule-line token, section-padding token |
| `src/components/Navigation.tsx` + `.module.css` | Italic logo, dot indicator, scroll state, mobile overlay rules |
| `src/components/FeaturedTrips.tsx` + `.module.css` | Chapter label, remove radius, orange hover rule, view-all link |
| `src/components/Work.tsx` + `.module.css` | Chapter label, dense grid, card redesign |
| `src/components/Stories.tsx` + `.module.css` | Chapter label, horizontal row list layout |
| `src/components/About.tsx` + `.module.css` | Chapter label, enlarged headline, edge-to-edge image, aside facts |
| `src/components/Contact.tsx` + `.module.css` | Chapter label, centered headline, borderless form, full-width button |
| `src/app/page.tsx` | Updated footer (three-column) |
