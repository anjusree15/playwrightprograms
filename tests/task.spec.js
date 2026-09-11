import test from "@playwright/test"
 test.only("locators", async({page}) =>{
    await page.goto("https://selenium.qabible.in/simple-form-demo.php")
await page.getByPlaceholder("Message").fill("demo screen")//getByPlaceholder method
await page.getByRole("button", { name: "Show Message" }).click()
await page.getByText("Two Input Fields").isVisible()
await page.locator("#value-a").fill("10")
await page.locator("#value-b").fill("20")//nth method to locate the second input field
await page.getByRole("button", { name: "Get Total" }).click()
await page.waitForTimeout(10000)//wait for 10 sec
})

