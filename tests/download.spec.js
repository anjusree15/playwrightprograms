import test from "@playwright/test"
test('Download @web @tag', async ({ page }) => {
await page.goto('https://demoqa.com/upload-download')
const fDownload=page.getByRole("button", { name: "Download" })
const downloadPromise=page.waitForEvent("download")
await fDownload.click()
const download=await downloadPromise
await download.saveAs('C:\\Users\\YOGA SLIM 7\\OneDrive\\Desktop\\Playwright pgms\\Utiles\\img.jpeg')
await page.waitForTimeout(3000)
})
