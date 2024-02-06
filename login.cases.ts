Feature: Login Cases
Scenario: Positive Case

    When(/^I open the link){
        mainPage.click();
    }


    Then(^I enter valid values){
        username.setText('standard_user');
        password.setText('secret_sauce');
    }


    And(^I can login){
        loginSuccess.should('be.true');
 
    }
  

    Scenario: Negative Case

    When(/^I open the link){
        mainPage.click();
    }


    Then(^I enter invalid values){
        username.setText('standard_user1234');
        password.setText('secret_sauce');
    }


    And(^I can login){
        loginSuccess.should('be.true');
 
    }
   


    Scenario: Random Case

    When(/^I open the link){
        mainPage.click();
    }


    Then(^I enter valid values){
        username.setText('standard_user1234');
        password.setText('secret_sauce');
    }


    And(^I can see add to cart button){
        loginSuccess.should('be.true');
 
    }
  