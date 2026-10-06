import { expect, Locator, Page} from "@playwright/test"

export class CheckoutPage{
    page:Page
    checkFirstname:Locator
    checkLastName:Locator
    checkZip:Locator
    continueBtn:Locator
    finishBtn:Locator
    OrderConfirm:Locator
    constructor(page:Page){
        this.page=page
        this.checkFirstname=page.locator("#first-name")//checkout 
        this.checkLastName=page.locator("#last-name")
        this.checkZip=page.locator("#postal-code")
        this.continueBtn=page.locator("#continue")
        this.finishBtn=page.locator("#finish")
        this.OrderConfirm=page.getByText("Thank you for your order!")
    }
   async enterCheckoutDetails(checkFirstname:string,checkLastName:string,checkZip:string)
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
        




        

   