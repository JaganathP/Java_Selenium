package com.wallethubtest.assignment.wallethubpage;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.Given;

public class WallethubPageSteps {


    private final WallethubPage wallethubPage;

    public WallethubPageSteps() {
        this.wallethubPage = new WallethubPage();
    }

        @Given("^A user navigate to WalletHub Review page$")
        public void aUserNavigatesToWallethubPage(){
        this.wallethubPage.goToHomePage();
    }    

        @Then("^user hovers and clicks on four Star review$")
        public void userClicksonFourStar(){
        this.wallethubPage.selectRating();
    } 

        @Then("^user lands on review page here select Health Insurance from the dropdown$")
        public void userSelectHealthInsurance(){
        this.wallethubPage.selectHealthInsurance();  
    } 
    
        @And("^user enter the \"([^\"]*)\" in the textarea Section$")
        public void UserEnterReview(final String review) {
        this.wallethubPage.enterReview(review);
    }   

        @Then("^user clicks on Submit button on the top right header$")
        public void userClicksSubmitButton(){
        this.wallethubPage.clicksSubmitButton();  
    } 

        @Then("^user lands on login page here select Login Tab$")
        public void userClicksonLoginTab(){
        this.wallethubPage.clicksLoginTab();
    }

        @Then("^user enters \"([^\"]*)\" with \"([^\"]*)\" and clicks on Login Button$")
        public void UserEnterEmailandPassword(final String Email, final String Password) {
        this.wallethubPage.enterEmailPassword(Email, Password);
    }   

        @Then("^user checks for the \"([^\"]*)\" in the Test Insurance Company Page$")
        public void UsercheckstheReview(final String review) {
        this.wallethubPage.checkReview(review);
}

}
