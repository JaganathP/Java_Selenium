package com.wallethubtest.assignment.homepage;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.Given;

public class HomePageSteps {


    private final HomePage homePage;

    public HomePageSteps() {
        this.homePage = new HomePage();
    }

        @Given("^A user navigate to Facebook Login page$")
        public void aUserNavigatesToFacebookLoginPage(){
        this.homePage.goToHomePage();
    }    
    
        @Then("^user enters \"([^\"]*)\" in email textfield$")
        public void UserEnterEmail(final String email) {
        this.homePage.enterEmail(email);
    }

        @Then("^user enters \"([^\"]*)\" in password textfield$")
        public void UserEnterPassword(final String password) {
        this.homePage.enterPassword(password);
    }

        @And("^user click on Login button$")
        public void UserClicksonLogin() {
        this.homePage.clickLogin();
    }

        @And("^user check for the Facebook feed page$")
        public void UserDailyFeed() {
        this.homePage.dailyFeed();
    }

        @Then("^user enters \"([^\"]*)\" in the post text area and clicks Post button$")
        public void UserEnterPost(final String message) {
        this.homePage.enterPost(message);
    }   

        @Then("^user checks for the \"([^\"]*)\" in the daily feed$")
        public void UserChecksPost(final String message) {
        this.homePage.checkPost(message);
    }

    
}
