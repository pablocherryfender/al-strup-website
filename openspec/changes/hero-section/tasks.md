## 1. Hero Component

- [x] 1.1 Create `src/components/Hero.astro` — full-width blue gradient section, outcome headline, subheadline with Gdańsk/Gdynia/Sopot, "Bezpłatna wycena" CTA (href="#kontakt"), "Zadzwoń" CTA (href="tel:TBD")
- [x] 1.2 Add hero to `src/pages/index.astro` before the section placeholders

## 2. Mobile Call Bar

- [x] 2.1 Create `src/components/MobileCallBar.astro` — fixed bottom, `md:hidden`, phone icon, "Zadzwoń" text, tel: link
- [x] 2.2 Add MobileCallBar to `src/layouts/Layout.astro` after `<Footer>`
- [x] 2.3 Add `pb-16 md:pb-0` to `<main>` in Layout to prevent content hiding behind bar

## 3. Verify

- [x] 3.1 Run `npm run build` — zero errors
- [x] 3.2 Visually check: hero fills viewport, CTAs visible, mobile bar shows at bottom on narrow screen
