package com.wallethubtest.assignment.homepage;

import java.util.Date;

import com.wallethubtest.assignment.basepage.BasePage;

import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


public class HomePage extends BasePage{

    private static final String HOME_PAGE_URL = "https://facebook.com";


    @FindBy(id = "email")
    private WebElement email;

    @FindBy(id = "pass")
    private WebElement password;

    @FindBy(xpath = "//label[@id='loginbutton']")
    private WebElement loginbutton;

    @FindBy(xpath = "//textarea[1]")
    private WebElement dailyfeed;

    @FindBy(xpath = "//*[@id='feedx_sprouts_container']/descendant::button[@type='submit']")
    private WebElement postbutton;

    @FindBy(css = "input[name=q]")
    private WebElement searchInput;

    @FindBy(xpath = "//p[contains(text(),'Hello World')]")
    private WebElement postmessage;


    HomePage() {
        PageFactory.initElements(driver, this);
    }

    void goToHomePage() {
        driver.get(HOME_PAGE_URL);
        wait.forLoading(5);
    }

    void enterEmail(String email) {
        Assert.assertEquals(this.email.isDisplayed(), true);
        this.email.sendKeys(email);
    }

    void enterPassword(String password) {
        Assert.assertEquals(this.password.isDisplayed(), true);
        this.password.sendKeys(password);
    }

    void clickLogin() {
        Assert.assertEquals(this.loginbutton.isEnabled(), true);
        this.loginbutton.click();
    }

    void dailyFeed() {
        try {
            Thread.sleep(5000);
        } catch (InterruptedException ie) {
            Thread.currentThread().interrupt();
        } 
        Assert.assertEquals(this.dailyfeed.isDisplayed(), true); 
    }

    void enterPost(String message) {
        Date objDate = new Date();
        this.dailyfeed.sendKeys(message + objDate.toString());
        Assert.assertEquals(this.postbutton.isEnabled(), true);
        this.postbutton.click();
        wait.forLoading(2); 
    }

    void checkPost(String message) {
        Assert.assertEquals(this.postmessage.isDisplayed(), true);
        this.postmessage.getText().equals(message);
    }

}
