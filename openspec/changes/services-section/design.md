## Context

Pure Astro component, no React island needed. 7 services from PRD. Tailwind v4 brand tokens available. shadcn/ui available but cards will be custom for full design control.

## Goals / Non-Goals

**Goals:**
- 7 service cards in a responsive grid (1 col mobile → 2 col tablet → 3 col desktop, with last row centred if odd)
- Each card: SVG icon, Polish title, short 1–2 sentence description
- Section heading + subheading
- Consistent with brand blue palette

**Non-Goals:**
- No individual service pages yet
- No pricing
- No booking/CTA per card (single "Bezpłatna wycena" CTA at section bottom)

## Decisions

**Inline SVG icons over icon library**
Lucide-react is available but adds a React island for static icons. Inline SVG keeps the component pure Astro, zero JS, faster render.

**Grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`**
7 cards: row 1 = 3, row 2 = 3, row 3 = 1 centred. Use `lg:col-start-2` on the 7th card when it's alone.

**Card style: white card, blue icon, subtle shadow**
White cards on the brand-surface background provide clear separation. Blue icon top-left gives visual anchor. Hover lifts the card slightly with `hover:-translate-y-1` transition.

## Migration Plan

1. Create `src/components/Services.astro` with 7 service cards
2. Replace `#uslugi` placeholder in `index.astro`
3. Run build — verify zero errors
