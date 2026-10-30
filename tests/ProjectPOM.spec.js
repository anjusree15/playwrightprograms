import {test,expect } from '@playwright/test'
test('DemoBlazeProject', async ({page}) => {
await page.goto('https://www.demoblaze.com/')
//Open Signup
await page.locator("#signin2").click()
// Enter username and password
await page.fill('#sign-username', 'Spain123')
await page.fill('#sign-password', 'lucifer')

const dialogDisplay = page.waitForEvent('dialog');
//Signup
await page.getByRole("button",{name:"Sign up"}).click()
const dialog= await dialogDisplay
//popup
const message=dialog.message()
expect(['Sign up successful.','This user already exist.']).toContain(dialog.message())
console.log('Pop up message:',message)
//pop up accept
await dialog.accept()
await page.waitForTimeout(3000)
})