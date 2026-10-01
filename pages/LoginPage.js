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
async loginUser(uname,pwd){
  
await this.username.fill(uname)
await this.password.fill(pwd)
await this.login.click()
await this.page.waitForLoadState('networkidle')
   }

}