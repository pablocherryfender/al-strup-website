## ADDED Requirements

### Requirement: Fixed mobile call bar
A fixed bottom bar SHALL be visible only on mobile (below md breakpoint) on every page, providing a one-tap click-to-call action.

#### Scenario: Bar is visible on mobile
- **WHEN** the viewport is below 768px wide
- **THEN** a fixed bar appears at the bottom of the screen with a phone icon and "Zadzwoń" label

#### Scenario: Bar is hidden on desktop
- **WHEN** the viewport is 768px or wider
- **THEN** the fixed bottom bar is not visible

#### Scenario: Tapping the bar initiates a call
- **WHEN** a mobile visitor taps the call bar
- **THEN** the device initiates a call via `tel:` link
