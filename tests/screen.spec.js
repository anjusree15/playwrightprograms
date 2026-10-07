import {test,expect} from "@playwright/test"
test ("screen",async({page})=>{
await page.goto("https://www.saucedemo.com")
await page.screenshot({path:"screenshot.png",fullPage:true})
const loginButton=page.getByRole("button",{name:"Login"})
await loginButton.screenshot({path:"loginButton.png"})//to take screenshot of particular element

})