# PRD — Allross: Strona Wizytówkowa

## 1. Goal

Build a fast, mobile-first website for a sole-trader HVAC/installation technician operating under the brand **Allross** in Trójmiasto (Gdańsk, Gdynia, Sopot). The site serves as a digital business card with a self-managed project gallery — hosted on a Polish VPS, no third-party CMS.

## 2. Target Users

**Public visitors:**
- Homeowners looking for heat pump, A/C, or plumbing installation in Trójmiasto
- Building managers and property developers (B2B — need NIP/firma info for invoicing)
- Existing clients seeking contact details

**Admin (the owner):**
- The technician himself — logs into `/admin`, manages projects and photos without any coding

## 3. Tech Stack

| Layer | Choice |
|---|---|
| Framework | Astro v5 (SSR, Node adapter) |
| UI | React v19 (islands where needed) |
| Styling | Tailwind CSS v4 |
| Database | SQLite via `better-sqlite3` |
| File storage | Local filesystem on VPS (outside project root, served by nginx) |
| Hosting | Polish VPS — cyber_Folks or home.pl (~30–50 PLN/month) |
| Reverse proxy | nginx (TLS termination, static file serving, security headers) |
| Process manager | PM2 or systemd |
| Contact form | Formspree (with honeypot/reCAPTCHA enabled) |
| Analytics | TBD (optional) |
| Color palette | Professional blue (primary), white/light grey (bg), dark grey (text) |
| Logo | To be designed — SVG wordmark "Allross" |

**No Supabase. No third-party CMS. Admin access via single password in `.env`.**

## 4. Pages & Sections

### 4.1 Public site (`/`)

Single-page layout with sticky top navigation and anchor links.

Section order (trust-building funnel):

| Section | Content |
|---|---|
| **Sticky nav** | Logo, anchor links (Usługi, Realizacje, O mnie, Kontakt), phone number |
| **Hero** | "Allross" wordmark, tagline (outcome-focused), "Bezpłatna wycena" CTA + click-to-call |
| **Services** | Card grid — one card per service (icon + title + short description) |
| **About** | Bio, years of experience, F-gazowe certification badge, service area: Gdańsk / Gdynia / Sopot + surrounding area, NIP/firma info |
| **Testimonials** | 3–5 client quotes (static, first name + city) |
| **Projects** | Gallery grid — service-type filter, cover photo + title per card |
| **Contact** | Phone, WhatsApp, email, service area, "Bezpłatna wycena" form (Formspree), response time promise |
| **Footer** | Logo, phone, email, NIP, copyright, link to Polityka prywatności |
| **Mobile floating CTA** | Fixed bottom bar on mobile: phone icon + "Zadzwoń" button |

### 4.2 Project detail (`/projekty/[slug]`)

- Full-width photo gallery with lightbox (click to open full-screen)
- Title, description (written with SEO keywords in mind), service type tag, city
- Back button to home (not a text link)
- SEO: unique meta title/description per project

### 4.3 Admin panel (`/admin`)

Password-protected (single password via `.env`):

| Screen | Functionality |
|---|---|
| **Login** | Password field → set signed HttpOnly session cookie |
| **Projects list** | List all projects, edit / delete actions |
| **Add project** | Title (with keyword hint), description, service type (dropdown of 7), city, upload photos |
| **Edit project** | Same form pre-filled; reorder photos (up/down), remove individual photos |

### 4.4 Legal (`/polityka-prywatnosci`)

Minimal RODO-compliant privacy policy — required for contact form data collection.

### 4.5 Error page (`/404`)

Branded 404 with link back to home.

## 5. Services

1. Pompy ciepła — montaż i uruchomienie
2. Klimatyzacja — instalacja systemów klimatyzacji i wentylacji
3. Systemy sanitarne — przenoszenie punktów hydraulicznych
4. Serwis — konserwacja i naprawy urządzeń
5. Audyt budynków — przeglądy przedmontażowe
6. Ogrzewanie podłogowe — projektowanie i montaż
7. Wstępne podgrzewanie CWU — dla budynków wielorodzinnych

## 6. Database Schema

### `projects` table

| Column | Type | Notes |
|---|---|---|
| `id` | INTEGER PRIMARY KEY AUTOINCREMENT | |
| `title` | TEXT NOT NULL | Max 120 chars |
| `slug` | TEXT UNIQUE NOT NULL | Auto-generated from title, immutable after creation |
| `description` | TEXT | Plain text only, no HTML |
| `service_type` | TEXT NOT NULL | Enum: one of 7 service names |
| `city` | TEXT | e.g. Gdańsk, Gdynia, Sopot |
| `cover_photo_id` | INTEGER | FK → photos.id, nullable |
| `created_at` | TEXT | ISO 8601 |

### `photos` table

| Column | Type | Notes |
|---|---|---|
| `id` | INTEGER PRIMARY KEY AUTOINCREMENT | |
| `project_id` | INTEGER NOT NULL | FK → projects.id, CASCADE DELETE |
| `filename` | TEXT NOT NULL | Stored filename on disk |
| `order` | INTEGER NOT NULL | For reordering (F-11) |

## 7. Functional Requirements

| ID | Requirement |
|---|---|
| F-01 | Mobile-first responsive layout |
| F-02 | Sticky navigation with anchor links |
| F-03 | Fixed floating "Zadzwoń" button on mobile |
| F-04 | Each service displayed as a card with icon, title, description |
| F-05 | Click-to-call and WhatsApp links in hero and contact section |
| F-06 | Page loads in < 2s on mobile (Lighthouse performance ≥ 90) |
| F-07 | Polish language throughout |
| F-08 | Project gallery filterable by service type |
| F-09 | Project detail page with lightbox photo gallery |
| F-10 | Photos uploaded at runtime served via nginx from outside project root |
| F-11 | Uploaded photos converted to WebP and resized (max 1920px wide) before storing |
| F-12 | Contact form via Formspree with honeypot, success message, error message, loading state |
| F-13 | `/admin` protected by password (env var `ADMIN_PASSWORD`) |
| F-14 | Session cookie: signed, HttpOnly, Secure, SameSite=Strict, 8h expiry |
| F-15 | Admin login: rate-limited (max 5 attempts per IP per 10 minutes) |
| F-16 | Admin: create, edit, delete projects (delete cascades to photos + disk files) |
| F-17 | Admin: upload multiple photos per project (MIME whitelist: jpg/png/webp, max 10MB each) |
| F-18 | Admin: reorder photos (up/down buttons) |
| F-19 | Admin: designate cover photo per project |
| F-20 | All admin POST/PUT/DELETE routes protected with CSRF token |
| F-21 | Input validation with Zod on all API routes |
| F-22 | `LocalBusiness` JSON-LD structured data on home page |
| F-23 | Unique meta title/description and Open Graph tags per page |
| F-24 | Sitemap.xml including project detail pages |
| F-25 | Polityka prywatności page (RODO compliance) |

## 8. Non-Functional Requirements

- HTTPS enforced (nginx + Let's Encrypt / Certbot)
- Security headers via nginx: X-Frame-Options, X-Content-Type-Options, Referrer-Policy, CSP
- Accessible: WCAG 2.1 AA minimum (touch targets ≥ 44×44px)
- PM2 or systemd keeps Node process alive across crashes and reboots
- Nightly backup of SQLite database + uploads directory
- `.env` in `.gitignore`; `/uploads` directory outside project root
- `npm install` run on VPS (not copied from Mac) to compile `better-sqlite3` for Linux

## 9. Out of Scope

- Public user accounts or registration
- Blog / articles (revisit in Phase 6)
- Online booking / scheduling
- Payment processing
- Multi-language support
- Per-service landing pages (revisit in Phase 6)

## 10. Open Items

- Phone number — TBD
- Email address — TBD
- WhatsApp number — TBD
- NIP / business registration number — TBD
- F-gazowe certificate details — TBD
- Real project photos — placeholder (pompa ciepła stock photos) during development
- VPS provider — cyber_Folks or home.pl (TBD at deployment)
- Google Business Profile — to be set up alongside launch (Phase 5)
