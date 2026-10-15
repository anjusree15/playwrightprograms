import test from "@playwright/test"
test('Example test @web @tag', async ({ page }) => {
await page.goto('https://demoqa.com/upload-download')
const fUpload=page.locator("#uploadFile")
await fUpload.setInputFiles('C:\\Users\\YOGA SLIM 7\\OneDrive\\Desktop\\Playwright pgms\\Utiles\\exceljs.xlsx')
await page.waitForTimeout(3000)
})
//