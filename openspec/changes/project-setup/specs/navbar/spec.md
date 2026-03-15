## ADDED Requirements

### Requirement: Sticky navigation bar
The site SHALL have a sticky top navbar that remains visible as the user scrolls.

#### Scenario: Navbar is visible on scroll
- **WHEN** the user scrolls down the page
- **THEN** the navbar remains fixed at the top of the viewport

#### Scenario: Navbar contains anchor links
- **WHEN** the navbar renders
- **THEN** it contains links: Usługi (`/#uslugi`), Realizacje (`/#realizacje`), O mnie (`/#o-mnie`), Kontakt (`/#kontakt`)

#### Scenario: Mobile hamburger menu
- **WHEN** viewport width is below 768px and user taps the hamburger icon
- **THEN** the mobile menu opens showing all anchor links

#### Scenario: Mobile menu closes on link tap
- **WHEN** the user taps a nav link in the open mobile menu
- **THEN** the mobile menu closes
