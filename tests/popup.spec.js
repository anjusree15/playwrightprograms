import test from "@playwright/test"
test ("windowHandling",async({page})=>{

    await page.goto("https://selenium.qabible.in/window-popup.php")
   
   const [newPage]= await Promise.all([
        page.waitForEvent('popup'), 
        await page.locator(".btn.btn-primary.windowSingle").click()
    ])
    await newPage.waitForLoadState()
    const parentPage=await page.title()
    console.log(parentPage)
    const childPage=await newPage.title()
    console.log(childPage)
    await newPage.close()
    await page.waitForTimeout(3000)
})