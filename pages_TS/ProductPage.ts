import {Locator, Page} from "@playwright/test"
export class ProductPage{
    page:Page
    prodName:Locator
    shoppingCart:Locator
    constructor(page:Page)
    {
        this.page=page
        this.prodName=page.locator(".inventory_item_name")
        this.shoppingCart = page.locator(".shopping_cart_link")
    }
    async addProdToCart(myProduct:string)
    {
        const prodCount=await this.prodName.count()
        console.log(prodCount)
        const prodList=await this.prodName.allTextContents()//to fetch multiple elements
        console.log(prodList)
        
    
    for(let i=0;i<prodCount;i++)
    {
         if (await this.prodName.nth(i).textContent() === myProduct)
        {
        const inventoryDesc = this.page.locator(".inventory_item_description").nth(i)
        const addToCart=inventoryDesc.getByText("Add to Cart")
        await addToCart.click()
        break
         }
         
    }
    }
    async gotoCart(){
        await this.shoppingCart.click()
    }
}