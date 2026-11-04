import {Before, BeforeStep, AfterStep, After, Status} from "@cucumber/cucumber"
import {chromium} from "playwright"
import PageManager from "../../pageobjects/PageManager"
const browser=await chromium.launch({headless:false})
const context=await browser.newContext()
  this.page=await context.newPage()

  Before(async function () {
    console.log("Before hook is executed before the first step of each scenario");
    this.browser = await chromium.launch({ headless: false }); //need to launch browser in headed mode, so that we can see the browser actions
    this.context = await browser.newContext(); //need to create new context, so that we can have separate session for each test
    this.page = await context.newPage(); //need to create new page, so that we can have separate page for each test
    this.pom = new PageManager(this.page);
    this.cp = await this.pom.getCheckOutPage();

})
BeforeStep(async function({}) {
    console.log("run before every step of scenario");
})
AfterStep(async function({result}) {
    console.log("run after every step of scenario");
    if(result.status===Status.FAILED){
        await this.page.screenshot({path:`./screenshot/${Date.now()}.png`,fullPage:true})
}})
After(async function() {
    console.log("After hook is executed after the last step of each scenario");
    if(this.page){
    await this.page.close();
    }
    if(this.context){
    await this.context.close();
    }
    if(this.browser){
    await this.browser.close();
}})