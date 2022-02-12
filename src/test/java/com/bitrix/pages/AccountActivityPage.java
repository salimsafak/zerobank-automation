package com.bitrix.pages;

import com.bitrix.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.nio.file.WatchEvent;
import java.util.List;

public class AccountActivityPage extends AccountSummaryPage {

    public  AccountActivityPage() {
        PageFactory.initElements(Driver.get(), this);
    }


    @FindBy(partialLinkText = "Account Activity")
    public WebElement AccountActivity;


    public void AccountActivit()  {
        AccountActivity.getText();
        AccountActivity.isDisplayed();


    }
    @FindBy(className = "control-label")
    public WebElement Account;

    public void Account(){
        Account.getText();
    }
    @FindBy(xpath = "//option[.='Savings']")
    public WebElement AccountOptions;

    public void AccountOptions(){
        AccountOptions.getText();
                //getAttribute("Savings");
    }


}
