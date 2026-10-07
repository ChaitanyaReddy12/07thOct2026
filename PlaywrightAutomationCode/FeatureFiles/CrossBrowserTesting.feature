
Feature: Playwright Methods

    @regression
    Scenario: verify playwright methods in chrome
        Given I launch the browser
        And I verify playwright methods
        And I close the browser

    @regression
    Scenario: verify playwright methods in firefox
        Given I launch the firefox browser
        And I verify playwright methods
        And I close the browser

    @regression
    Scenario: verify playwright methods in webkit
        Given I launch the webkit browser
        And I verify playwright methods
        And I close the browser

    @regression
    Scenario: verify playwright methods in headless browser
        Given I launch the headless browser
        And I verify playwright methods
        And I close the browser