import {test,expect} from "@playwright/test"
import { objectManager } from "../pages/objectManager"

test("demoproject", async({page}) =>{
//login page
//constructor
const pom=new objectManager(page)
const lp=await pom.getLoginPage()
const pp=await pom.getProductPage()
const cr=await pom.getCartPage()
const cp=await pom.getCheckoutPage()

await lp.navigatePage()
const uname="standard_user"
const pwd="secret_sauce"
await lp.loginUser(uname,pwd)//method
//prod page

const myProduct="Sauce Labs Backpack"
//cart
await pp.addProdToCart(myProduct)
await pp.gotoCart()
await cr.validateprod(myProduct)
//checkout

await cp.enterCheckoutDetails("anju","sree","0123")
await cp.clickContinue()
await cp.finish()
await cp.verify()

//await page.locator("#item_4_title_link").click()
//const shopLink=page.locator(".shopping_cart_link")
//await shopLink.click()

await page.waitForTimeout(3000)

})