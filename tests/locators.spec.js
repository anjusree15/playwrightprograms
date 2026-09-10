import test from "@playwright/test"
 test.only("locators", async({page}) =>{
/*await page.goto("https://selenium.qabible.in/form-submit.php")
await page.locator("#validationCustom01").fill("anju")//locate and fill-clear the existing data and add new value.
//await page.pause()//pause the execution temporarily to check the values in the browser
await page.locator(".form-control").nth(1).fill("sree")
await page.locator("[placeholder='Username']").fill("anjusree15")//placeholder attribute
await page.locator("//input[@placeholder='City']").fill("kochi")//xpath
await page.getByPlaceholder("State").fill("Kerala")//getByPlaceholder method
await page.getByLabel("Zip").fill("682020")//getByLabel method
await page.getByLabel("Agree to terms and conditions").check()//check the checkbox
await page.getByRole("button",{name:"Submit form"}).click()//getByRole method-checkbox, radio button, link etc
await page.waitForTimeout(3000)//wait for 3 sec
})*/
//uniquely find the specific web elements-locators
// css locator
// goto https://selenium.qabible.in/simple-form-demo.php-task
await page.goto("https://selenium.qabible.in/simple-form-demo.php")
await page.getByPlaceholder("Message").fill("demo screen")//getByPlaceholder method
await page.getByRole("button", { name: "Show Message" }).click()
await page.getByText("Two Input Fields").isVisible()
await page.locator("#value-a").fill("10")
await page.locator("#value-b").fill("20")//nth method to locate the second input field
await page.getByRole("button", { name: "Get Total" }).click()
await page.waitForTimeout(10000)//wait for 10 sec
})

