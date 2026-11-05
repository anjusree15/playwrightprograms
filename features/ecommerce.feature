Feature: End to End Test

  Scenario: Buy a product
    Given Enter username and password "standard_user" & "secret_sauce"
    When add "Sauce Labs Backpack" to the cart
    Then verify "Sauce Labs Backpack" is add to the cart
    When valid "Anju" "Sree" "121212" added
    Then checked order confirmation