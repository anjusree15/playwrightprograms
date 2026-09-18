import {test,expect} from '@playwright/test'
test ("modal" , async({page})=>{
    await page.goto("https://selenium.qabible.in/bootstrap-modal.php")
    await page.getByRole("button",{name:"Launch modal"}).first().click()
const modal=page.locator("#exampleModalCenter")
await expect(modal).toBeVisible()
await modal.locator(".btn.btn-secondary").click()//class
    await page.waitForTimeout(3000)

})