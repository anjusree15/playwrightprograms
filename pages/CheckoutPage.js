import { expect} from "@playwright/test"
export class CheckoutPage{
    constructor(page){
        this.page=page
        this.checkFirstname=page.locator("#first-name")//checkout 
        this.checkLastName=page.locator("#last-name")
        this.checkZip=page.locator("#postal-code")
        this.continueBtn=page.locator("#continue")
        this.finishBtn=page.locator("#finish")
        this.OrderConfirm=page.getByText("Thank you for your order!")
    }
   async enterCheckoutDetails(checkFirstname,checkLastName,checkZip)
   {
    await this.checkFirstname.fill("checkFirstname")
    await this.checkLastName.fill("checkLastName")
    await this.checkZip.fill("checkZip")
    }
    
    async clickContinue()
    {
    await this.continueBtn.click()
    }
    async finish()
    {
        await expect(this.page).toHaveURL("https://www.saucedemo.com/checkout-step-two.html")
    await this.finishBtn.click() 
    }
    async verify()
        {
        await expect(this.page).toHaveURL("https://www.saucedemo.com/checkout-complete.html")
        await expect(this.OrderConfirm).toBeVisible()
        }
       
    }
        




        

   