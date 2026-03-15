## Context

Astro v5 SSR project with Tailwind v4 brand tokens already defined (`brand-primary`, `brand-primary-dark`, `brand-surface`, `brand-text`). No React island needed — the hero is purely presentational with no client state. The mobile call bar needs a `<script>` only if we want to hide it when phone is clicked (optional). Phone number is TBD — use `tel:TBD` placeholder.

## Goals / Non-Goals

**Goals:**
- Outcome-focused headline in Polish ("Ciepło, chłód i woda w Twoim domu")
- Subheadline mentions Gdańsk, Gdynia, Sopot explicitly for local SEO
- Two CTAs: "Bezpłatna wycena" (scroll to #kontakt) + "Zadzwoń" (tel: link)
- Mobile fixed bottom call bar (F-03) — highest-converting mobile element
- Fast: zero JS, pure HTML/CSS

**Non-Goals:**
- No hero image/photo yet (placeholder gradient background)
- No animations beyond simple CSS transitions
- No React island

## Decisions

**Gradient background over photo**
Real photos are TBD. A professional blue gradient (`brand-primary` → `brand-primary-dark`) looks polished without images and loads instantly. A photo can be layered in later.

**Two CTAs side by side**
PRD specifies "Bezpłatna wycena" as primary CTA (scroll anchor) and click-to-call as secondary. On mobile they stack vertically.

**MobileCallBar in Layout, not Hero**
The floating call bar should persist across all pages (PRD F-03), not just the hero. Adding it to `Layout.astro` means it appears automatically on every page, including future project detail pages.

**`pb-20 md:pb-0` on body/main to avoid bar overlap**
The fixed bottom bar is `h-14`. On mobile, a `pb-16` on `<main>` in Layout prevents page content from being hidden behind it.

## Migration Plan

1. Create `src/components/Hero.astro`
2. Create `src/components/MobileCallBar.astro`
3. Add MobileCallBar to `Layout.astro` (inside `<body>`, after `<Footer>`)
4. Add `pb-16 md:pb-0` to `<main>` in Layout for mobile bar clearance
5. Import Hero in `index.astro`, place before section placeholders
6. Run build — verify zero errors
