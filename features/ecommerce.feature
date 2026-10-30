//feature file
Feature:End to End Test
    Scenario: Buy Product
    Given Enter the username and password
    When Add a product to the Cart
    Then Verify the product is same as selected on Cart
    When entered valid user details
    Then Order is confirmed 