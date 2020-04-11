$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/com/wallethubtest/assignment/Wallethub.feature");
formatter.feature({
  "name": "WalletHub Review Section",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify the Review Section with Four Star Rating",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@walletHub"
    },
    {
      "name": "@review"
    },
    {
      "name": "@sanity"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "A user navigate to WalletHub Review page",
  "keyword": "Given "
});
formatter.step({
  "name": "user hovers and clicks on four Star review",
  "keyword": "Then "
});
formatter.step({
  "name": "user lands on review page here select Health Insurance from the dropdown",
  "keyword": "Then "
});
formatter.step({
  "name": "user enter the \"\u003cReview\u003e\" in the textarea Section",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on Submit button on the top right header",
  "keyword": "Then "
});
formatter.step({
  "name": "user lands on login page here select Login Tab",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \"\u003cEmail\u003e\" with \"\u003cPassword\u003e\" and clicks on Login Button",
  "keyword": "Then "
});
formatter.step({
  "name": "user checks for the \"\u003cReview\u003e\" in the Test Insurance Company Page",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Review",
        "Email",
        "Password"
      ]
    },
    {
      "cells": [
        "Twinkle, twinkle, little star How I wonder what you are Up above the world so high Like a diamond in the sky Twinkle, twinkle little star How I wonder what you are When the blazing sun is gone When he nothing shines upon Then you show…",
        "jagan.jaganath10@gmail.com",
        "EE!T6c9h@XPWBr@"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify the Review Section with Four Star Rating",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@walletHub"
    },
    {
      "name": "@review"
    },
    {
      "name": "@sanity"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "A user navigate to WalletHub Review page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.wallethubtest.assignment.wallethubpage.WallethubPageSteps.aUserNavigatesToWallethubPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user hovers and clicks on four Star review",
  "keyword": "Then "
});
formatter.match({
  "location": "com.wallethubtest.assignment.wallethubpage.WallethubPageSteps.userClicksonFourStar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user lands on review page here select Health Insurance from the dropdown",
  "keyword": "Then "
});
formatter.match({
  "location": "com.wallethubtest.assignment.wallethubpage.WallethubPageSteps.userSelectHealthInsurance()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter the \"Twinkle, twinkle, little star How I wonder what you are Up above the world so high Like a diamond in the sky Twinkle, twinkle little star How I wonder what you are When the blazing sun is gone When he nothing shines upon Then you show…\" in the textarea Section",
  "keyword": "And "
});
formatter.match({
  "location": "com.wallethubtest.assignment.wallethubpage.WallethubPageSteps.UserEnterReview(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Submit button on the top right header",
  "keyword": "Then "
});
formatter.match({
  "location": "com.wallethubtest.assignment.wallethubpage.WallethubPageSteps.userClicksSubmitButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user lands on login page here select Login Tab",
  "keyword": "And "
});
formatter.match({
  "location": "com.wallethubtest.assignment.wallethubpage.WallethubPageSteps.userClicksonLoginTab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"jagan.jaganath10@gmail.com\" with \"EE!T6c9h@XPWBr@\" and clicks on Login Button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.wallethubtest.assignment.wallethubpage.WallethubPageSteps.UserEnterEmailandPassword(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user checks for the \"Twinkle, twinkle, little star How I wonder what you are Up above the world so high Like a diamond in the sky Twinkle, twinkle little star How I wonder what you are When the blazing sun is gone When he nothing shines upon Then you show…\" in the Test Insurance Company Page",
  "keyword": "And "
});
formatter.match({
  "location": "com.wallethubtest.assignment.wallethubpage.WallethubPageSteps.UsercheckstheReview(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});