Feature: Login Cases

Scenario: Positive Case

    When I open the link
    Then I enter valid values
    And I can login


Scenario: Negative Case with invalid username

    When I open the link
    Then I enter invalid values
    And I can login


Scenario: Random Case 

    When I open the link
    Then I enter valid values
    And I can see add to cart button