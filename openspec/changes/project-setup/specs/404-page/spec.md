## ADDED Requirements

### Requirement: Branded 404 page
The site SHALL render a branded not-found page for any unmatched URL.

#### Scenario: 404 page renders for unknown URL
- **WHEN** a user visits a URL that does not match any route
- **THEN** the 404 page renders with the Allross brand, an error message in Polish, and a button linking back to the home page
