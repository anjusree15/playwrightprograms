/*export class CheckoutPage{
    constructor(page){
        this.page=page
        

     
this.checkFirstname=page.locator("#first-name")//checkout page
await this.checkFirstname.fill("anju")

this.checkLastName=page.locator("#last-name")
await this.checkLastName.fill("sree")

this.checkZip=page.locator("#postal-code")
await this.checkZip.fill("0123")

this.continueBtn=page.locator("#continue")
await this.continueBtn.click()

await expect(this.page.getByText("Thank you for your order!")).toBeVisible()
    }
    async VerifyProdinCart(myProduct){
 await expect(this.cartProd).toHaveText(myProduct)
    }
    async clickCheckout()
    {
    await this.checkOutBtn.click()
    }
    async clickContinue(){
    await this.continueBtn.click()
    }
    async finish(){
        await expect(this.page).toHaveURL("https://www.saucedemo.com/checkout-step-two.html")
        await this.finish.click()
    }
    
        async verify(){
        await expect(this.page).toHaveURL("https://www.saucedemo.com/checkout-complete.html")
        await expect(this.page.getByText("Thank you for your order!")).toBeVisible()

}  
}*/


        

   