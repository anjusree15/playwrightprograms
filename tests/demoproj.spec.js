import {test,expect} from "@playwright/test"
 test("demoproject", async({page}) =>{
await page.goto("https://www.saucedemo.com/")
const username=page.getByPlaceholder("Username")
await username.fill("standard_user")
const password=page.getByPlaceholder("Password")
await password.fill("secret_sauce")
const login=page.getByRole("button",{name:"login"})
await login.click()
await page.waitForLoadState('networkidle')//in case of network issue-use this method
const prodName=page.locator(".inventory_item_name")
const prodCount=await prodName.count()
console.log(prodCount)
const prodList=await prodName.allTextContents()//to fetch multiple elements
console.log(prodList)
const myProduct="Sauce Labs Backpack"
for(let i=0;i<prodCount;i++)
{
    if(await prodName.nth(i).textContent()==myProduct){

        const inventoryDesc=page.locator(".inventory_item_description").nth(i)
        let addToCart= inventoryDesc.getByText("Add to Cart")
        await addToCart.click()
        break
    }
}
//await page.locator("#item_4_title_link").click()
const shopLink=page.locator(".shopping_cart_link")
await shopLink.click()
const cartProd=page.locator(".inventory_item_name")
await expect(cartProd).toHaveText(myProduct)
const checkOutBtn=page.locator("#checkout")
await checkOutBtn.click()

const checkFirstname=page.locator("#first-name")
await checkFirstname.fill("anju")

const checkLastName=page.locator("#last-name")
await checkLastName.fill("sree")

const checkZip=page.locator("#postal-code")
await checkZip.fill("0123")

const continueBtn=page.locator("#continue")
await continueBtn.click()




//const addToCart=await page.getByText("Add to Cart")

await page.waitForTimeout(3000)

})