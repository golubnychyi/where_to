import assert from "assert";
import {By} from "selenium-webdriver";
import config from "config";
import BasePage from "./base-page.js";
import * as action from "../utils/selenium.js";


//Not the best solution but other variants didn't work. Probably for such important fields I would like to ask dev team to setup "id" attribute.
let fieldFrom = By.xpath('//*[@placeholder="Where are you traveling to? Enter your exact meeting address, office, or location for the best results"]');
let fieldTo = By.xpath('//*[@placeholder="Business Name, Address, City, or Airport"]');

//Not the best solution. It's better to select some element from list. Or create additional JSON file with list of destinations.
let airportBKK = By.xpath("//div[text()='(BKK) Suvarnabhumi Airport']");
let airportLHR = By.xpath("//div[text()='(LHR) London Heathrow Airport']");

//The same as with fields "From" and "To" it's better to have "id" for such field.
let buttonSearch = By.xpath("(//button[@type='submit'])[2]");


export default class SearchPage extends BasePage {
    constructor(driver, visit = false) {
        super(driver, buttonSearch, visit, config.get('url'));
        buttonSearch = buttonSearch;
    }

    searchForSomeDestinations() {
        action.sendKeys( this.driver, fieldFrom, config.get('airportBangkok'));
        action.clickIfPresent(this.driver, airportBKK, 30);

        action.sendKeys( this.driver, fieldTo, config.get('airportLondon'));
        action.clickIfPresent(this.driver, airportLHR, 30);
        
        // let toValue = this.driver.findElement(userName);
        // title.getText().then(function (text) {
        //     assert.equal(text, 'test@test.com');
        // });
        
        action.clickIfPresent(this.driver, buttonSearch);
    }
}