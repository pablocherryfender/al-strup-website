## ADDED Requirements

### Requirement: Page footer
The site SHALL have a footer rendered on every page containing brand info and contact placeholders.

#### Scenario: Footer contains required elements
- **WHEN** any page renders
- **THEN** the footer contains: "Allross" wordmark, phone placeholder, email placeholder, NIP placeholder, copyright year, and a link to `/polityka-prywatnosci`

#### Scenario: Copyright year is current
- **WHEN** the footer renders
- **THEN** the copyright line shows the current year (e.g. © 2026 Allross)
