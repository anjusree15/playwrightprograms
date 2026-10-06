import { expect ,Locator , Page} from "@playwright/test"
export class CartPage{
    cartProd:Locator// type declared outside constructor
    checkOutBtn:Locator

    constructor(page:Page){
        this.cartProd=page.locator(".inventory_item_name")
         this.checkOutBtn=page.locator("#checkout")

    }
    async validateprod(myProduct:string){
        await expect(this.cartProd).toHaveText([myProduct])
        await this.checkOutBtn.click()
    }
}