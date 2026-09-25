import {test,expect} from "@playwright/test"
 test("demoproject", async({page}) =>{
await page.goto("https://www.saucedemo.com/")
const username=page.getByPlaceholder("Username")
await username.fill("standard_user")
const password=page.getByPlaceholder("Password")
await password.fill("secret_sauce")
const login=page.getByRole("button",{name:"login"})
await login.click()
await page.waitForLoadState('networkidle')//in case of network issue-use this method
const prodName=page.locator(".inventory_item_name")
const prodCount=await prodName.count()
console.log(prodCount)
const prodList=await prodName.allTextContents()//to fetch multiple elements
console.log(prodList)
const myProduct="Sauce Labs Backpack"

await page.waitForTimeout(3000)

})