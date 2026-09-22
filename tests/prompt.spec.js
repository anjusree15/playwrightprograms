import test from "@playwright/test"
test ("promptbox",async({page})=>{
await page.goto("https://selenium.qabible.in/javascript-alert.php")
page.on('dialog',async (prompt)=>{
    console.log(prompt.type())
    console.log(prompt.message())
       // await page.waitForTimeout(3000)
        await prompt.accept('anju')
})
await page.locator(".btn.btn-danger").click()
await page.waitForTimeout(3000)
})

