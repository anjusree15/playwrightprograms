import {test,expect} from "@playwright/test"
 test.only("locators", async({page}) =>{
await page.goto("https://selenium.qabible.in/radio-button-demo.php")
const femaleradio=page.locator("#inlineRadio2")
await femaleradio.check()
const showbutton=page.getByRole("button",{name:"Show Selected Value"})
await showbutton.click()
const radiomsg=page.locator("#message-one")
await expect(radiomsg).toBeVisible()
await page.waitForTimeout(3000)

 })
