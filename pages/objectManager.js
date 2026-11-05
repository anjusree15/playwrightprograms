import { LoginPage } from "../pages/LoginPage.js"
import { ProductPage } from "../pages/ProductPage.js"
import { CheckoutPage} from "../pages/CheckoutPage.js"
import { CartPage} from "../pages/CartPage.js"
export class objectManager{

    constructor(page){
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
