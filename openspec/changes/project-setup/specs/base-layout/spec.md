## ADDED Requirements

### Requirement: Shared page layout
Every page SHALL use `src/layouts/Layout.astro` which renders a complete HTML document with head meta, sticky navbar, page content slot, and footer.

#### Scenario: Layout renders head meta
- **WHEN** a page uses Layout with `title` and `description` props
- **THEN** the rendered HTML contains a `<title>` tag and `<meta name="description">` matching the props

#### Scenario: Layout includes navbar and footer
- **WHEN** any page renders using Layout
- **THEN** the sticky Navbar appears at the top and Footer appears at the bottom

#### Scenario: Smooth scroll with nav offset
- **WHEN** a user clicks an anchor link in the navbar
- **THEN** the page scrolls smoothly and the target section is not hidden behind the sticky nav
