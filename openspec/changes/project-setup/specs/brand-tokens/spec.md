## ADDED Requirements

### Requirement: Allross brand tokens in Tailwind
The project SHALL define Allross brand colors and typography as Tailwind CSS v4 custom tokens in `src/styles/global.css` using `@theme {}`.

#### Scenario: Brand colors available as Tailwind classes
- **WHEN** a component uses `bg-brand-primary` or `text-brand-primary`
- **THEN** the element renders with color `#1D4ED8`

#### Scenario: Page background uses brand surface color
- **WHEN** the home page loads
- **THEN** the `<body>` background is `#F8FAFC` (brand-surface)
