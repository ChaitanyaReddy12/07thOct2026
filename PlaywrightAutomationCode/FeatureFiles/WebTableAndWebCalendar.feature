Feature: Web Table And Web Calendar

    @regression
    Scenario: verify web table in static way
        Given I launch the browser
        Then I launch the atp application
        And I verify web table in static way
        And I close the browser

    @regression
    Scenario: verify web table in static way2
        Given I launch the browser
        Then I launch the atp application
        And I verify web table in static way2
        And I close the browser

    @regression
    Scenario: verify web table in dynamic way
        Given I launch the browser
        Then I launch the atp application
        And I verify web table in dynamic way
        And I close the browser

    @regression
    Scenario: verify web table headers in dynamic way
        Given I launch the browser
        Then I launch the atp application
        And I verify web table headers in dynamic way
        And I close the browser

    #  handle dynamic web table using the above 4 scenarios

    @regression
    Scenario: verify web calendar in static way
        Given I launch the browser
        Then I launch the atp application
        And I verify web calendar in static way
        And I close the browser

    @regression
    Scenario: verify web calendar in static way2
        Given I launch the browser
        Then I launch the atp application
        And I verify web calendar in static way2
        And I close the browser

    @regression
    Scenario: verify web calendar in dynamic way
        Given I launch the browser
        Then I launch the atp application
        And I verify web calendar in dynamic way
        And I close the browser

