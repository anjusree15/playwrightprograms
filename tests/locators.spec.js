import {test,expect} from "@playwright/test"
 test.only("locators", async({page}) =>{
await page.goto("https://selenium.qabible.in/form-submit.php")
await page.locator("#validationCustom01").fill("anju")//locate and fill-clear the existing data and add new value.
//await page.pause()//pause the execution temporarily to check the values in the browser
await page.locator(".form-control").nth(1).fill("sree")
await page.locator("[placeholder='Username']").fill("anjusree15")//placeholder attribute
await page.locator("//input[@placeholder='City']").fill("kochi")//xpath
await page.getByPlaceholder("State").fill("Kerala")//getByPlaceholder method
await page.getByLabel("Zip").fill("682020")//getByLabel method
await page.getByLabel("Agree to terms and conditions").check()//check the checkbox
const submitmsg=page.locator(".my-2")//submitmsg is locator-variable to store the locator value
await expect(submitmsg).not.toBeVisible()//assertion to verify the locator is not visible
await page.getByRole("button",{name:"Submit form"}).click()//getByRole method-checkbox, radio button, link etc

const msg=await submitmsg.textContent()//textContent method to get the text value of the locator
console.log(msg)
await expect(submitmsg).toBeVisible()//assertion to verify the locator is visible
await expect(submitmsg).toHaveText(msg)//
await expect(msg).toContain("sub")//assertion to verify the text value of the locator
await page.waitForTimeout(3000)//wait for 3 sec
})
//uniquely find the specific web elements-locators
// css locator
// goto https://selenium.qabible.in/simple-form-demo.php-task
//assertions-are used to verify that your application behaves as expected during tests.

