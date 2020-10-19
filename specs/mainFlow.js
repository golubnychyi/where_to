import test from "selenium-webdriver/testing";
import config from "config";
import LoginPage from "../page/login-page.js";
import * as BrowserFactory from "../utils/browsers.js";
import * as SeleniumFactory from "../utils/selenium.js";
import SearchPage from "../page/search-page";

let driver = null;
let loginPage = null;
let searchPage = null;

const mochaTimeoutMS = config.get('mochaTimeoutMS');

test.describe('Navigate to the Internet page', function () {
    this.timeout(mochaTimeoutMS);

    test.before(function () {
        driver = BrowserFactory.initializeTestSetUp("firefox");
        loginPage = new LoginPage(driver, true);
    });

    test.it('Login to the System', function () {
        loginPage.loginToSystem();

        searchPage = new SearchPage(driver, true);
        searchPage.searchForSomeDestinations();
    });


    // test.it('One more test', function () {
    // });

    test.afterEach(() => driver.manage().deleteAllCookies());
    test.after(() => driver.quit());
});