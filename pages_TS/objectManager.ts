import { LoginPage } from "../pages_TS/LoginPage"
import { ProductPage } from "../pages_TS/ProductPage"
import { CheckoutPage} from "../pages_TS/CheckoutPage"
import { CartPage} from "../pages_TS/CartPage"
import { Page } from "@playwright/test"
export class objectManager{
    lp:LoginPage// classname as type
    pp:ProductPage
    cr:CartPage
    cp:CheckoutPage

    constructor(page:Page){
      this.lp=new LoginPage(page)
      this.pp=new ProductPage(page)
      this.cr=new CartPage(page)
      this.cp=new CheckoutPage(page)
    }
    async getLoginPage()
    {
        return this.lp
        
    }
    async getProductPage()
    {
        return this.pp
    }
    async getCartPage()
    {
        return this.cr
    }
    async getCheckoutPage()
    {
        return this.cp
    }
}
