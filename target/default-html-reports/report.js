$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/AccountActivityNavigation.feature");
formatter.feature({
  "name": "Navigating\tto\tspecific\taccounts\tin\tAccounts\tActivity",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Brokerage\taccount\tredirect",
  "description": "     Given\tthe\tuser\tis\tlogged\tin",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the\tuser\tclicks\ton\t\"Brokerage\"\tlink\ton\tthe\t\"Account\tSummary\" page",
  "keyword": "When "
});
formatter.match({
  "location": "com.bitrix.stepdefnitions.AccountActivityNavigationStepDefs.the_user_clicks_on_link_on_the_page(java.lang.String,java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"Savings\"}\n  (Session info: chrome\u003d97.0.4692.99)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-RVDJOGE\u0027, ip: \u0027192.168.1.61\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.12\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 97.0.4692.99, chrome: {chromedriverVersion: 97.0.4692.71 (adefa7837d02a..., userDataDir: C:\\Users\\salim\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52622}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: c90351ddb22892cb939d4792f319db11\n*** Element info: {Using\u003dlink text, value\u003dSavings}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:380)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:220)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat com.bitrix.stepdefnitions.AccountActivityNavigationStepDefs.the_user_clicks_on_link_on_the_page(AccountActivityNavigationStepDefs.java:39)\r\n\tat ✽.the\tuser\tclicks\ton\t\"Brokerage\"\tlink\ton\tthe\t\"Account\tSummary\" page(file:///C:/Users/salim/IdeaProjects/zerobank-automation/src/test/resources/features/AccountActivityNavigation.feature:11)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "the\t\"Account\tActivity\" page\tshould\tbe\tdisplayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bitrix.stepdefnitions.AccountActivityNavigationStepDefs.the_page_should_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Account\tdrop\tdown\tshould\thave\t\"Brokerage\"\tselected",
  "keyword": "And "
});
formatter.match({
  "location": "com.bitrix.stepdefnitions.AccountActivityNavigationStepDefs.account_drop_down_should_have_selected(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});