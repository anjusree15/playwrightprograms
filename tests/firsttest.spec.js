import{test}from "@playwright/test"
test("firsttest",async({browser})=>{// browser in built fixture
const context=await browser.newContext()//newContext is method -await is used to wait for the context to resolve before moving to the next line
const page=await context.newPage()//newPage is method
await page.goto("https://www.amazon.com/")

})
