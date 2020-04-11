Feature: WalletHub Review Section

  @walletHub @review @sanity @regression
  Scenario Outline: Verify the Review Section with Four Star Rating
    Given A user navigate to WalletHub Review page
    Then user hovers and clicks on four Star review
    Then user lands on review page here select Health Insurance from the dropdown
    And user enter the "<Review>" in the textarea Section
    Then user clicks on Submit button on the top right header
    And user lands on login page here select Login Tab
    Then user enters "<Email>" with "<Password>" and clicks on Login Button
    And user checks for the "<Review>" in the Test Insurance Company Page

    Examples:
      | Review    | Email   | Password  |
      | Twinkle, twinkle, little star How I wonder what you are Up above the world so high Like a diamond in the sky Twinkle, twinkle little star How I wonder what you are When the blazing sun is gone When he nothing shines upon Then you show… | jagan.jaganath10@gmail.com  | EE!T6c9h@XPWBr@ |
