import { Given, When, Then, After } from '@cucumber/cucumber';
import { chromium } from '@playwright/test';
import { objectManager } from '../../pages/objectManager.js';
import {setDefaultTimeout} from "@cucumber/cucumber"
setDefaultTimeout(60 * 1000);
Given('Enter username and password {string} & {string}', async function (uname, pwd) {

    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();

    this.page = await context.newPage();
    this.browser = browser;

    this.pom = new objectManager(this.page);

    const lp = await this.pom.getLoginPage();

    await lp.navigatePage();
    await lp.loginUser(uname, pwd);
});

When('add {string} to the cart', async function (productname) {

    const pp = await this.pom.getProductPage();

    await pp.addProdToCart(productname);
    await pp.gotoCart();
});

Then('verify {string} is add to the cart', async function (myProduct) {

    const cp = await this.pom.getCartPage();

    await cp.validateprod(myProduct);
});

When('valid {string} {string} {string} added', async function (checkFirstname, checkLastName, checkZip) {

    const cp = await this.pom.getCheckoutPage();

    await cp.enterCheckoutDetails(checkFirstname, checkLastName, checkZip);
    await cp.clickContinue();
    await cp.finish();
});

Then('checked order confirmation', async function () {

    const cp = await this.pom.getCheckoutPage();

    await cp.verifyOrderConfirmation();
});

After(async function () {
    await this.browser?.close();
});