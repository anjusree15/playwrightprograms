export default class LoginPage {
    constructor(page) {
        this.page = page
        this.loginLink = page.locator('#login2')
        this.username = page.locator('#loginusername')
        this.password = page.locator('#loginpassword')
        this.loginButton = page.getByRole('button', { name: 'Log in' })
        this.logoutLink = page.locator('#logout2')
        this.welcomeUser = page.locator('#nameofuser')
    }

    async openLogin() {
        await this.loginLink.click()
        await this.page.locator('#logInModal').waitFor({ state: 'visible' })
    }

    async login(username, password) {
        await this.openLogin()

        await this.username.fill(username)
        await this.password.fill(password)

        await this.loginButton.click()
    }

    async loginWithInvalidCredentials(username, password) {
        await this.openLogin()

        await this.username.fill(username)
        await this.password.fill(password)

        const [dialog] = await Promise.all([
            this.page.waitForEvent('dialog'),
            this.loginButton.click()
        ])

        const message = dialog.message()
        await dialog.accept()

        return message
    }

    async logout() {
        await this.logoutLink.click()
    }
}