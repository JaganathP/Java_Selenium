Feature: Facebook Daily Feed

  @facebook_page @facebook_post @sanity @regression
  Scenario Outline: Post a Message in Facebook Daily Feed
    Given A user navigate to Facebook Login page
    Then user enters "<Email>" in email textfield
    Then user enters "<Password>" in password textfield
    When user click on Login button
    Then user check for the Facebook feed page
    And user enters "<Message>" in the post and clicks Post button
    Then user checks for the "<Message>" in the daily feed

    Examples:
      | Email                     | Password    | Message       |
      | happytoday1029@gmail.com  | ASDFG@12345 | Hello World   |