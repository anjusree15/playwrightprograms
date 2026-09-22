import test from "@playwright/test"
test ("alert",async({page})=>{

    await page.goto("https://selenium.qabible.in/javascript-alert.php")
    page.on('dialog',async (dialog)=>{
        await page.waitForTimeout(3000)
        await dialog.dismiss()// dialog box handling
      //  await dialog.accept()
    })
    await page.locator(".btn.btn-warning").click()

     await page.waitForTimeout(3000)
    
})