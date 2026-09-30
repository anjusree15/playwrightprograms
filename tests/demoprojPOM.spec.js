import {test,expect} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"
import { ProductPage } from "../pages/ProductPage"
import { CheckoutPage} from "../pages/CheckoutPage"
import { CartPage} from "../pages/CartPage"

test("demoproject", async({page}) =>{
//login page
const lp=new LoginPage(page)//constructor
await lp.navigatePage()
await lp.loginUser()
//prod page
const pp=new ProductPage(page)
const myProduct="Sauce Labs Backpack"
//cart
await pp.addProdToCart(myProduct)
await pp.gotoCart()
const cr=new CartPage(page)
await cr.validateprod(myProduct)
//checkout
const cp=new CheckoutPage(page)
await cp.enterCheckoutDetails("anju","sree","0123")
await cp.clickContinue()
await cp.finish()
await cp.verify()

//await page.locator("#item_4_title_link").click()
//const shopLink=page.locator(".shopping_cart_link")
//await shopLink.click()

await page.waitForTimeout(3000)

})