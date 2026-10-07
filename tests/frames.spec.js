import {test,expect} from "@playwright/test"
test ("frames",async({page})=>{
await page.goto("https://demoqa.com/frames")
const iFrame=page.frameLocator("#frame1")//locator for frame
const heading=iFrame.locator("#sampleHeading")
const content=await heading.textContent()
await expect(heading).toHaveText(content)
console.log(content)
})