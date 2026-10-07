import {test,expect} from "@playwright/test"
test ("visualcomparison",async({page})=>{
await page.goto("https://www.amazon.com")
await expect(page).toHaveScreenshot("amazon.png")//to take full page screenshot

})