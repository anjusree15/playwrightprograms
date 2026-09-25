import {test,expect} from "@playwright/test"
test ("draganddrop",async({page})=>{
await page.goto("https://selenium.qabible.in/drag-drop.php")

const targetPage=await page.getByText("Draggable n°1")
const destPage=page.locator("#mydropzone")
await targetPage.dragTo(destPage)

await page.waitForTimeout(3000)

})



test ("multipledrag&drop",async({page})=>{
await page.goto("https://selenium.qabible.in/drag-drop.php")

const targetPage=await page.locator('[draggable="true"]')
const destPage=page.locator("#mydropzone")
const count=await targetPage.count()
console.log(count)
for(let i=0;i<count;i++)
{
    await targetPage.nth(0).dragTo(destPage)
}
//await targetPage.dragTo(destPage)
await page.waitForTimeout(3000)

})
