import {test,expect} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"
test("demoproject", async({page}) =>{

const lp=new LoginPage(page)//constructor
await lp.navigatePage()
await lp.loginUser()

//in case of network issue-use this method
const prodName=page.locator(".inventory_item_name")// prod page
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

const checkFirstname=page.locator("#first-name")//checkout page
await checkFirstname.fill("anju")

const checkLastName=page.locator("#last-name")
await checkLastName.fill("sree")

const checkZip=page.locator("#postal-code")
await checkZip.fill("0123")

const continueBtn=page.locator("#continue")
await continueBtn.click()

await expect(page).toHaveURL("https://www.saucedemo.com/checkout-step-two.html")
await page.locator("#finish").click()

await expect(page).toHaveURL("https://www.saucedemo.com/checkout-complete.html")
await expect(page.getByText("Thank you for your order!")).toBeVisible()
await page.waitForTimeout(3000)

})