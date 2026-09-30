import { expect} from "@playwright/test"
export class CartPage{

    constructor(page){

        this.cartProd=page.locator(".inventory_item_name")
         this.checkOutBtn=page.locator("#checkout")

    }
    async validateprod(myProduct){
        await expect(this.cartProd).toHaveText([myProduct])
        await this.checkOutBtn.click()
    }
}