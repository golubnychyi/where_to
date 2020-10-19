import assert from "assert";
import {By} from "selenium-webdriver";
import BasePage from "./base-page.js";

export default class SearchResultPage extends BasePage {
    constructor(driver) {
        super(driver);
    }

    selectSomeTickets() {
        // var title = this.driver.findElement(someElement);
        // title.getText().then(function (text) {
        //     assert.equal(text, 'sometext');
        // });
    }
}