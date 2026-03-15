## Why

The home page currently shows empty placeholder sections. The hero is the first thing a visitor sees — it must immediately communicate who Allross is, what problem they solve, where they operate, and give a clear path to contact. Without a strong hero, visitors bounce before reading anything else.

## What Changes

- Replace the empty `#uslugi` section placeholder in `index.astro` with a full `Hero.astro` component above it
- Build a new `src/components/Hero.astro` section with: Allross wordmark/tagline, outcome-focused headline, subheadline with service area, two CTAs ("Bezpłatna wycena" scroll-to-contact + click-to-call phone), and a floating mobile call bar (F-03)
- Add a `MobileCallBar.astro` component — fixed bottom bar visible only on mobile with phone icon and "Zadzwoń"

## Capabilities

### New Capabilities

- `hero-section`: Full-width hero with headline, subheadline, dual CTAs, professional blue gradient background
- `mobile-call-bar`: Fixed bottom bar on mobile with click-to-call button (F-03)

### Modified Capabilities

## Impact

- `src/pages/index.astro` — Hero component inserted before section placeholders
- `src/components/Hero.astro` — new file
- `src/components/MobileCallBar.astro` — new file
- `src/layouts/Layout.astro` — MobileCallBar added to layout so it appears on all public pages
