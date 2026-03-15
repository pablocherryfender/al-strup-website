## Why

The starter template (10x-astro-starter) has been stripped of Supabase/auth but still contains the original welcome page and no brand identity. Before any content sections can be built, the project needs a clean base: the Allross brand, a professional blue color palette, reusable layout components (sticky nav, footer), and a 404 page.

## What Changes

- Replace the existing `Welcome.astro` placeholder page with a clean, empty home page shell
- Define the Allross color palette and typography as Tailwind CSS custom tokens
- Create the base `Layout.astro` with `<head>` meta, sticky navigation, and footer
- Create a `Navbar.astro` component with anchor links and phone number
- Create a `Footer.astro` component with logo, contact info, NIP placeholder, copyright
- Create a branded `404.astro` page
- Update `package.json` name to `allross-website`

## Capabilities

### New Capabilities

- `base-layout`: Shared HTML shell with head meta, sticky nav, footer — used by every page
- `brand-tokens`: Allross color palette and typography defined as Tailwind CSS v4 custom tokens
- `navbar`: Sticky top navigation with anchor links (Usługi, Realizacje, O mnie, Kontakt) and phone placeholder
- `footer`: Page footer with logo wordmark, phone, email, NIP placeholders, copyright, privacy policy link
- `404-page`: Branded not-found page with link back to home

### Modified Capabilities

## Impact

- `src/pages/index.astro` — replaced with empty section shell using new Layout
- `src/layouts/Layout.astro` — rewritten as the shared base layout
- `src/components/Navbar.astro` — new file
- `src/components/Footer.astro` — new file
- `src/pages/404.astro` — new file
- `src/styles/global.css` — Allross brand tokens added
- `package.json` — name updated
- `Welcome.astro`, `Topbar.astro` — removed (replaced by new layout)
