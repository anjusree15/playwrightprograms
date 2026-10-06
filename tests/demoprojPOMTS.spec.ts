import {test,expect} from "@playwright/test"
import { objectManager } from "../pages_TS/objectManager"
import data from "../Utiles/data.json"
//const testData=JSON.parse(JSON.stringify(data))//to change to normal string

for(const testData of data){
test(`demoproject ${testData.myProduct}`, async({page}) =>{//concatenate the prod name-myproduct is the unique identifier

//constructor
const pom=new objectManager(page)
const lp=await pom.getLoginPage()
const pp=await pom.getProductPage()
const cr=await pom.getCartPage()
const cp=await pom.getCheckoutPage()

await lp.navigatePage()

await lp.loginUser(testData.uname,testData.pwd)//method
//prod page

//cart
await pp.addProdToCart(testData.myProduct)
await pp.gotoCart()
await cr.validateprod(testData.myProduct)
//checkout

await cp.enterCheckoutDetails(testData.fname,testData.lname,testData.zip)
await cp.clickContinue()
await cp.finish()
await cp.verify()
await page.waitForTimeout(3000)

})
}