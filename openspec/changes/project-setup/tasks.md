## 1. Brand Tokens

- [x] 1.1 Add Allross brand color tokens to `src/styles/global.css` using Tailwind v4 `@theme {}` — primary `#1D4ED8`, primary-dark `#1E3A8A`, surface `#F8FAFC`, text `#0F172A`
- [x] 1.2 Add `scroll-behavior: smooth` to `html` and `scroll-margin-top: 80px` to all sections in global CSS

## 2. Base Layout

- [x] 2.1 Rewrite `src/layouts/Layout.astro` — accept `title` and `description` props, import global CSS, render `<Navbar>`, `<slot>`, `<Footer>`
- [x] 2.2 Add Open Graph meta tags to Layout head (title, description, og:type, og:locale set to `pl_PL`)

## 3. Navbar Component

- [x] 3.1 Create `src/components/Navbar.astro` — sticky, brand-primary background, "Allross" text wordmark on left, anchor links on right
- [x] 3.2 Add mobile hamburger button and hidden mobile menu to Navbar
- [x] 3.3 Add inline `<script>` to Navbar for hamburger toggle (open/close mobile menu, close on link tap)

## 4. Footer Component

- [x] 4.1 Create `src/components/Footer.astro` — "Allross" wordmark, phone placeholder, email placeholder, NIP placeholder, dynamic copyright year, link to `/polityka-prywatnosci`

## 5. Home Page Shell

- [x] 5.1 Replace `src/pages/index.astro` with a clean shell using Layout — empty sections with IDs: `uslugi`, `realizacje`, `o-mnie`, `kontakt`
- [x] 5.2 Delete `src/components/Welcome.astro` and `src/components/Topbar.astro`

## 6. 404 Page

- [x] 6.1 Create `src/pages/404.astro` using Layout — Polish error message ("Strona nie istnieje"), button linking back to home

## 7. Cleanup & Verify

- [x] 7.1 Update `name` in `package.json` to `allross-website`
- [x] 7.2 Run `npm run build` and confirm zero errors
- [x] 7.3 Run `npm run dev` and visually verify: navbar sticks on scroll, footer shows, 404 works at any unknown URL, mobile menu opens/closes
