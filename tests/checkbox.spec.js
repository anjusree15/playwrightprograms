import {test,expect} from "@playwright/test"
 test.only("locators", async({page}) =>{
await page.goto("https://selenium.qabible.in/check-box-demo.php")
const inputform=page.getByRole("link",{name:"Input Form"})
await inputform.click()//click the input form link
const checkboxdemo=page.getByRole("link",{name:"Checkbox Demo"})
await checkboxdemo.click()
const checkbox=page.getByRole("checkbox",{name:"Click on this check box"})
await checkbox.check()
const successmsg=page.getByText("Success - Check box is checked")
await expect(successmsg).toBeVisible()
const msg1=await successmsg.textContent()//to fetch the text inside the locator
console.log(msg1)
//task

 })