package com.bitrix.pages;

import com.bitrix.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {

    public LoginPage() {
        PageFactory.initElements(Driver.get(), this);

    }

    @FindBy(id = "signin_button")
    public WebElement linkbuttonLoginPage;


    public void gotologinpage(String push) {
        linkbuttonLoginPage.click();

    }

    @FindBy(id = "user_login")
    public WebElement userName;


    @FindBy(id = "user_password")
    public WebElement password;

    @FindBy(name = "submit")
    public WebElement submit;


    public void login(String userNameStr, String passwordStr) {
        userName.sendKeys(userNameStr);
        password.sendKeys(passwordStr);
        submit.click();
        // verification that we logged



    }

    @FindBy(id = "details-button")
    public WebElement AdvancedButton;

    public void Advanced() {
        AdvancedButton.click();

    }

    @FindBy(id = "proceed-link")
    public WebElement Proceed;

    public void Proceed() {
        AdvancedButton.click();

    }
}
