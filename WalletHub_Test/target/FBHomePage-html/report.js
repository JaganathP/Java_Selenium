$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/com/wallethubtest/assignment/FBHomePage.feature");
formatter.feature({
  "name": "Facebook Daily Feed",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Post a Message in Facebook Daily Feed",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@facebook_page"
    },
    {
      "name": "@facebook_post"
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
  "name": "A user navigate to Facebook Login page",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters \"\u003cEmail\u003e\" in email textfield",
  "keyword": "Then "
});
formatter.step({
  "name": "user enters \"\u003cPassword\u003e\" in password textfield",
  "keyword": "Then "
});
formatter.step({
  "name": "user click on Login button",
  "keyword": "And "
});
formatter.step({
  "name": "user check for the Facebook feed page",
  "keyword": "Then "
});
formatter.step({
  "name": "user enters \"\u003cMessage\u003e\" in the post text area and clicks Post button",
  "keyword": "And "
});
formatter.step({
  "name": "user checks for the \"\u003cMessage\u003e\" in the daily feed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Email",
        "Password",
        "Message"
      ]
    },
    {
      "cells": [
        "happytoday1029@gmail.com",
        "ASDFG@12345",
        "Hello World"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Post a Message in Facebook Daily Feed",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@facebook_page"
    },
    {
      "name": "@facebook_post"
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
  "name": "A user navigate to Facebook Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.wallethubtest.assignment.homepage.HomePageSteps.aUserNavigatesToFacebookLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"happytoday1029@gmail.com\" in email textfield",
  "keyword": "Then "
});
formatter.match({
  "location": "com.wallethubtest.assignment.homepage.HomePageSteps.UserEnterEmail(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"ASDFG@12345\" in password textfield",
  "keyword": "Then "
});
formatter.match({
  "location": "com.wallethubtest.assignment.homepage.HomePageSteps.UserEnterPassword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "com.wallethubtest.assignment.homepage.HomePageSteps.UserClicksonLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user check for the Facebook feed page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.wallethubtest.assignment.homepage.HomePageSteps.UserDailyFeed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Hello World\" in the post text area and clicks Post button",
  "keyword": "And "
});
formatter.match({
  "location": "com.wallethubtest.assignment.homepage.HomePageSteps.UserEnterPost(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user checks for the \"Hello World\" in the daily feed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.wallethubtest.assignment.homepage.HomePageSteps.UserChecksPost(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});