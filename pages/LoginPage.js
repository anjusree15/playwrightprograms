export class LoginPage {
    constructor(page){
 this.username=page.getByPlaceholder("Username")
 this.password=page.getByPlaceholder("Password")
 this.login=page.getByRole("button",{name:"login"})
 this.page=page
    }
     async navigatePage(){
    await this.page.goto("https://www.saucedemo.com/")
   }
async loginUser(){
  
await this.username.fill("standard_user")
await this.password.fill("secret_sauce")
await this.login.click()
await this.page.waitForLoadState('networkidle')
   }

}