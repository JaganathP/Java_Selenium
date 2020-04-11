package com.wallethubtest.assignment.wallethubpage;
import javax.swing.Action;

import com.wallethubtest.assignment.basepage.BasePage;

import org.junit.Assert;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.interactions.Actions;


public class WallethubPage extends BasePage{

    Action action;

    private static final String HOME_PAGE_URL = "https://wallethub.com/profile/test_insurance_company";


    @FindBy(xpath = "//review-star[@class='rvs-svg']//div[@class='rating-box-wrapper']//*[local-name()='svg'][4]")
    private WebElement fourstar;

    @FindBy(xpath = "//span[contains(text(),'Select...')]")
    private WebElement dropdown;

    @FindBy(xpath = "//li[contains(text(),'Health Insurance')]")
    private WebElement healthinsurance;

    @FindBy(xpath = "//textarea[@placeholder='Write your review...']")
    private WebElement writereview;

    @FindBy(className = "sbn-action")
    private WebElement submitbutton;

    @FindBy(xpath = "//nav[@class='ng-animate-enabled basic-trans enter join']//a[contains(text(),'Login')]")
    private WebElement logintab;

    @FindBy(name = "em")
    private WebElement emailfield;

    @FindBy(name = "pw1")
    private WebElement passwordfield;

    @FindBy(xpath = "//button[@type='button' and contains(., 'Login')]")
    private WebElement loginbutton;

    @FindBy(className = "rvtab-ci-content")
    private WebElement checkreview;


    WallethubPage() {
        PageFactory.initElements(driver, this);
    }

    void goToHomePage() {
        driver.get(HOME_PAGE_URL);
        wait.forLoading(5);
    }

    void selectRating() {
        Assert.assertEquals(this.fourstar.isDisplayed(), true);
        Actions action = new Actions(driver);
        action.sendKeys(Keys.PAGE_DOWN).build().perform();  //scrolling to the review section
        action.moveToElement(fourstar).perform();           //performing hover action on the review star        
        this.fourstar.click();
        
    }

    void selectHealthInsurance() {
        Assert.assertEquals(this.dropdown.isDisplayed(), true);
        this.dropdown.click();
        Assert.assertEquals(this.healthinsurance.isDisplayed(), true);
        this.healthinsurance.click();

    }

    void enterReview(String review) {
        this.writereview.click();
        Assert.assertEquals(this.writereview.isDisplayed(), true);
        this.writereview.sendKeys(review);
        this.writereview.sendKeys(review);
    }

    void clicksSubmitButton() {
        Assert.assertEquals(this.submitbutton.isEnabled(), true);
        this.submitbutton.click();
    }

    void clicksonLoginTab() {
        try {
            Thread.sleep(4000);
        } catch (InterruptedException ie) {
            Thread.currentThread().interrupt();
        }
        Assert.assertEquals(this.logintab.isDisplayed(), true);
        this.logintab.click();
    }

    void enterEmailPassword(String Email, String Password) {
        Assert.assertEquals(this.emailfield.isDisplayed(), true);
        this.emailfield.sendKeys(Email);
        Assert.assertEquals(this.passwordfield.isDisplayed(), true);
        this.passwordfield.sendKeys(Password);
        this.loginbutton.click();
    }

    void checkReview(String review) {
        try {
            Thread.sleep(5000);
        } catch (InterruptedException ie) {
            Thread.currentThread().interrupt();
        }
        Assert.assertEquals(this.checkreview.isDisplayed(), true);
        this.checkreview.getText().equals(review);
    }



}
