import {Locator, Page} from "@playwright/test"
export class LoginPage {
   username:Locator//type
    password:Locator
    login:Locator
    page:Page
    constructor(page:Page){
 this.username=page.getByPlaceholder("Username")
 this.password=page.getByPlaceholder("Password")
 this.login=page.getByRole("button",{name:"login"})
 this.page=page
    }
     async navigatePage(){
    await this.page.goto("https://www.saucedemo.com/")
   }
async loginUser(uname:string,pwd:string){
  
await this.username.fill(uname)
await this.password.fill(pwd)
await this.login.click()
await this.page.waitForLoadState('networkidle')
   }

}