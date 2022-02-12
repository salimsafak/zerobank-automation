package com.bitrix.stepdefnitions;

import com.bitrix.pages.AccountActivityPage;
import com.bitrix.pages.AccountSummaryPage;
import com.bitrix.pages.LoginPage;
import com.bitrix.utilities.BrowserUtils;
import com.bitrix.utilities.ConfigurationReader;
import com.bitrix.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.support.FindBy;

public class AccountActivityNavigationStepDefs {

    @Given("the	user	is	logged	in")
    public void the_user_is_logged_in() {
        BrowserUtils.waitFor(3);
        String url = ConfigurationReader.get("url");
        Driver.get().get(url);
        LoginPage loginPage = new LoginPage();
//        loginPage.linkbuttonLoginPage.click();
       // if (Driver.get().getTitle().equals("Zero - Log in")) {
            String username = ConfigurationReader.get("driver_username");
            String password = ConfigurationReader.get("driver_password");


            loginPage.login(username, password);
            loginPage.AdvancedButton.click();
            loginPage.Proceed.click();

        }
    //}

    @When("the	user	clicks	on	{string}	link	on	the	{string} page")
    public void the_user_clicks_on_link_on_the_page(String Savings, String AccountActivity) {
        AccountSummaryPage accountSummaryPage = new AccountSummaryPage();
        accountSummaryPage.Savings.click();

    }


    @Then("the	{string} page	should	be	displayed")
    public void the_page_should_be_displayed(String AccountActivity) {
        AccountActivityPage accountActivityPage = new AccountActivityPage();
        System.out.println("accountActivityPage.AccountActivity.getText() = " + accountActivityPage.AccountActivity.getText());

    }


    @Then("Account	drop	down	should	have	{string}	selected")
    public void account_drop_down_should_have_selected(String Savings) {
        AccountActivityPage accountActivityPage = new AccountActivityPage();
        System.out.println("accountActivityPage.Account.getText() = " + accountActivityPage.Account.getText());

        accountActivityPage.AccountOptions.getText();
        System.out.println("accountActivityPage.AccountOptions.getText() = " + accountActivityPage.AccountOptions.getText());

        String actualAccountActivityPageGetText = accountActivityPage.AccountOptions.getText();
        String expected = "Savings";
        Assert.assertEquals(expected, actualAccountActivityPageGetText);

    }






    }


