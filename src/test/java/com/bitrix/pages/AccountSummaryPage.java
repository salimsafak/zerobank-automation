package com.bitrix.pages;

import com.bitrix.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AccountSummaryPage {
    public AccountSummaryPage() {
        PageFactory.initElements(Driver.get(), this);


    }


    @FindBy(linkText = "Savings")
    public WebElement Savings;


    public void Saving() {
        Savings.click();
    }


    @FindBy(linkText = "Brokerage")
    public WebElement Brokerage;


    public void Brokerage() {
        Brokerage.click();
    }
}


