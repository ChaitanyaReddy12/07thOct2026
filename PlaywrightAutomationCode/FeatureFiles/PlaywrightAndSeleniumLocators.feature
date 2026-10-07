Feature: Locators

    @regression
    Scenario: Verify Playwright Locators
        Given I launch the browser
        Then I launch the atp application
        And  I verify playwright Locators
        And I close the browser

    @regression
    Scenario: Verify Playwright Locators part2
        Given I launch the browser
        And  I verify playwright Locators part2
        And I close the browse

    @regression
    Scenario: Verify selenium Locators
        Given I launch the browser
        Then I launch the atp application
        And  I verify selenium Locators
        And I close the browser

    @regression
    Scenario: Verify selenium xpath methods
        Given I launch the browser
        Then I launch the atp application
        And I Verify selenium xpath methods
        And I close the browser

    @regression
    Scenario: Verify selenium xpath Axes
        Given I launch the browser
        Then I launch the atp application
        And I Verify selenium xpath Axes
        And I close the browser
