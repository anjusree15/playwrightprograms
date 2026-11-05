

import {Before,BeforeStep,AfterStep,After,Status} from "@cucumber/cucumber";
import { chromium } from "playwright"
import { objectManager } from '../../pages/objectManager.js'
Before(async function () {

    console.log("Before hook is executed before each scenario");

    this.browser = await chromium.launch({
        headless: false
    });

    this.context = await this.browser.newContext();

    this.page = await this.context.newPage();

    this.pom = new objectManager(this.page);

    this.cp = this.pom.getCheckoutPage();

});

BeforeStep(async function () {

    console.log("Run before every step of scenario");

});

AfterStep(async function ({ result }) {

    console.log("Run after every step of scenario");

    if (result.status === Status.FAILED && this.page) {

        await this.page.screenshot({
            path: `./screenshot/${Date.now()}.png`,
            fullPage: true
        });

    }

});

After(async function () {

    console.log("After hook is executed after each scenario");

    if (this.page) {
        await this.page.close();
    }

    if (this.context) {
        await this.context.close();
    }

    if (this.browser) {
        await this.browser.close();
    }

});