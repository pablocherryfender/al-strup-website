## Context

The starter has Astro v5 SSR with Node adapter, React 19, Tailwind CSS v4, and shadcn/ui. All Supabase/auth code has been removed. The existing `Welcome.astro` and `Topbar.astro` are placeholder components with no relevance to Allross. Tailwind v4 uses CSS-based configuration (no `tailwind.config.js`) — brand tokens go in `src/styles/global.css` using `@theme`.

## Goals / Non-Goals

**Goals:**
- Establish Allross brand identity (colors, typography) as reusable Tailwind tokens
- Create a single shared `Layout.astro` that all pages use
- Build sticky `Navbar.astro` and `Footer.astro` as standalone components
- Ship a working home page shell with empty section placeholders for Phases 2–3
- Add a branded 404 page

**Non-Goals:**
- No content yet (hero, services, projects — those are Phases 2–3)
- No database, no admin, no forms
- No logo image file yet — use text wordmark "Allross" in CSS

## Decisions

**Tailwind v4 CSS tokens over JS config**
Tailwind v4 defines custom tokens inside `@theme {}` in a CSS file. We use `src/styles/global.css` for all brand tokens: `--color-brand-*`, `--font-sans`. This is the correct v4 pattern.

**Single Layout.astro for all pages**
All pages import one `src/layouts/Layout.astro`. It accepts `title` and `description` props for per-page meta. The layout renders: `<head>`, `<Navbar>`, `<slot>` (page content), `<Footer>`.

**Navbar as Astro component, not React island**
The navbar has no client-side interactivity beyond a CSS mobile menu toggle. Using a pure Astro component with a `<script>` tag for the hamburger toggle keeps it zero-JS on desktop.

**Anchor-link navigation**
All nav links are `href="/#section-id"` anchors. The home page has empty `<section id="uslugi">`, `<section id="realizacje">`, `<section id="o-mnie">`, `<section id="kontakt">` placeholders. These get filled in subsequent phases.

**Color palette — professional blue**
- Primary: `#1D4ED8` (Tailwind blue-700) — buttons, accents, nav background
- Primary dark: `#1E3A8A` (blue-900) — hover states
- Surface: `#F8FAFC` (slate-50) — page background
- Text: `#0F172A` (slate-900) — body copy

## Risks / Trade-offs

**Tailwind v4 + shadcn/ui compatibility** → Validate that existing shadcn components in `src/components/ui/` render correctly after adding `@theme` tokens. Shadcn uses `hsl(var(--...))` CSS variables which coexist with Tailwind v4 `@theme` tokens without conflict.

**Sticky nav obscures anchor targets** → Use `scroll-margin-top` on each section to offset the nav height (~64px). Add `scroll-behavior: smooth` to `html`.

## Migration Plan

1. Add brand tokens to `src/styles/global.css`
2. Rewrite `src/layouts/Layout.astro`
3. Create `src/components/Navbar.astro`
4. Create `src/components/Footer.astro`
5. Replace `src/pages/index.astro` with section-shell version
6. Create `src/pages/404.astro`
7. Delete `src/components/Welcome.astro` and `src/components/Topbar.astro`
8. Update `package.json` name
9. Run `npm run build` to verify no errors
