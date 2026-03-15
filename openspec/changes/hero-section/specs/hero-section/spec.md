## ADDED Requirements

### Requirement: Hero section content
The hero section SHALL display an outcome-focused headline, subheadline with service area cities, and two CTAs.

#### Scenario: Headline is outcome-focused
- **WHEN** a visitor loads the home page
- **THEN** the hero shows a headline about the benefit to the client (warm, cool, water in your home), not a list of services

#### Scenario: Subheadline mentions Trójmiasto cities
- **WHEN** the hero renders
- **THEN** the subheadline explicitly names Gdańsk, Gdynia, and Sopot

#### Scenario: Primary CTA scrolls to contact
- **WHEN** a visitor clicks "Bezpłatna wycena"
- **THEN** the page scrolls smoothly to the `#kontakt` section

#### Scenario: Secondary CTA initiates a phone call
- **WHEN** a visitor clicks the call button
- **THEN** the device initiates a call via `tel:` link
