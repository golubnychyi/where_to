import assert from "assert";
import {By} from "selenium-webdriver";
import config from "config";
import * as action from "../utils/selenium.js";
import BasePage from "./base-page.js";


let userName = By.name('email');
let userPassword = By.name('password');
let buttonLogin = By.xpath('//span[text()="Log In"]');


export default class LoginPage extends BasePage {
    constructor(driver, visit = false) {
        super(driver, userName, visit, config.get('url'));
        userName = userName;
    }


    loginToSystem() {
        //This is not secure to get user data from default config file. It should be in additional json file, that not uploaded to the git and used only local for each user.
        this.driver.findElement(userName).sendKeys(config.get('userName'));
        this.driver.findElement(userPassword).sendKeys(config.get('userPassword'));
        action.click(this.driver, buttonLogin);
        this.driver.sleep(5000);
    }
}