# Allross — Roadmap

Each item is a separate OpenSpec change. Complete one before starting the next.

## Phase 1 — Foundation

- [ ] **project-setup** — base layout, sticky nav, footer, Allross branding, professional blue color palette, typography, 404 page

## Phase 2 — Public Site (top to bottom)

- [ ] **hero-section** — wordmark, outcome-focused tagline, "Bezpłatna wycena" CTA, click-to-call, floating mobile call button
- [ ] **services-section** — 7 service cards with icons and descriptions
- [ ] **about-section** — bio, F-gazowe certification badge, NIP/firma info, city list (Gdańsk / Gdynia / Sopot)
- [ ] **testimonials-section** — 3–5 static client quotes
- [ ] **contact-section** — phone, WhatsApp, email, Formspree form ("Bezpłatna wycena"), response time promise

## Phase 3 — Projects Feature (public)

- [ ] **database-setup** — add `better-sqlite3`, SQLite schema (projects + photos tables), 1 placeholder project (pompa ciepła) with fake photos
- [ ] **projects-gallery** — filterable project grid on home page (filter by service type)
- [ ] **project-detail-page** — `/projekty/[slug]`, lightbox photo gallery, SEO meta per project

## Phase 4 — Admin Panel

- [ ] **admin-panel** — password login (rate-limited, signed cookie), project CRUD, photo upload (WebP conversion, MIME whitelist), photo reorder, cover photo selection, CSRF protection

## Phase 5 — Launch Prep

- [ ] **seo-and-structured-data** — LocalBusiness JSON-LD, meta tags, Open Graph, sitemap.xml, Polityka prywatności page
- [ ] **deployment** — Polish VPS setup, nginx (TLS + uploads serving + security headers), PM2/systemd, Let's Encrypt, nightly backup, domain DNS
- [ ] **google-business-profile** — GBP listing setup, link to website, first reviews

---

**Current:** not started
**Stack:** Astro v5 SSR · React v19 · Tailwind v4 · SQLite (better-sqlite3) · Node adapter · nginx · PM2
**PRD:** `.ai/prd.md`
**Reviews:** `.ai/reviews.md`
