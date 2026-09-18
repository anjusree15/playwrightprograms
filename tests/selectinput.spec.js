
import test from '@playwright/test'
test("dropdownbox",async({page})=>{
    await page.goto("https://selenium.qabible.in/select-input.php")
    const dropdownbox=page.getByRole("combobox",{name:"Select Color"})
    await dropdownbox.selectOption("Red")
    await page.waitForTimeout(3000)
    // task to check if the selected one is red, using textContain and toContain

})



