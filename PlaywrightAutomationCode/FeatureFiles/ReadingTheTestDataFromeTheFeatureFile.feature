Feature: Reading The Test Data Frome The Feature File

    @regression
    Scenario: Verify Reading Testdata from the feature file
        Given I launch the browser
        Then I launch the atp application
        And I verify reading testdata from the feature file "<Name>","<Email>","<Phone>","<Address>","<Wikipedia>"
        # And I close the browser

        Examples:
            | Name     | Email              | Phone      | Address   | Wikipedia  |
            | Pranavi  | Pranavi@gmail.com  | 890890890  | Hyderabad | Playwright |
            | Bhargavi | Bhargavi@gmail.com | 7890890890 | Bangalore | Selenium   |
            | Prudhvi  | Prudhvi@gmail.com  | 6789067890 | Kerala    | Typescript |


    @regression
    Scenario Outline: Verify orangehrm applictaion launching
        Given I launch the browser
        Then I verify orangehrm applictaion launching "<url>","<username>","<password>"
        # And I close the browser

        Examples:
            | url                                                                | username | password |
            | https://opensource-demo.orangehrmlive.com/web/index.php/auth/login | Admin    | admin123 |