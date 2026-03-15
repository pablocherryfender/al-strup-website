## ADDED Requirements

### Requirement: Services card grid
The services section SHALL display all 7 HVAC services as cards in a responsive grid.

#### Scenario: All 7 services are displayed
- **WHEN** the services section renders
- **THEN** exactly 7 service cards are visible, each with an icon, title, and description

#### Scenario: Grid is responsive
- **WHEN** viewport is mobile (< 640px)
- **THEN** cards display in a single column

#### Scenario: Grid is responsive on tablet
- **WHEN** viewport is tablet (640px–1023px)
- **THEN** cards display in 2 columns

#### Scenario: Grid is responsive on desktop
- **WHEN** viewport is desktop (≥ 1024px)
- **THEN** cards display in 3 columns

#### Scenario: Section has a CTA
- **WHEN** the services section renders
- **THEN** a "Bezpłatna wycena" link is visible below the card grid, scrolling to #kontakt
