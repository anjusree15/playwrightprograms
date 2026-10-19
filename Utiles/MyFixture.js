import {test as base} from '@playwright/test'
import {LoginPage} from '../pages/LoginPage.js'
const customtest=base.extend({
    logDetails:async({page},use)=>{//fixture for login page ,
    const loginPage=new LoginPage(page)
    await loginPage.navigatePage()
    await loginPage.loginUser("standard_user","secret_sauce")
    await use(LoginPage)
    }
})
export {customtest}
