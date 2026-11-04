
export default class SignupPage {
    constructor(page) {
        this.page = page
        this.signupLink = page.locator('#signin2')
        this.username = page.locator('#sign-username')
        this.password = page.locator('#sign-password')
        this.signupButton = page.getByRole('button', { name: 'Sign up' })
        this.closeButton = page.locator('#signInModal .modal-header button.close')
    }

    async openSignup() {
        await this.signupLink.click()
    }

    async signup(username, password) {
        await this.username.fill(username)
        await this.password.fill(password)

        const [dialog] = await Promise.all([
            this.page.waitForEvent('dialog'),
            this.signupButton.click()
        ])

        const message = dialog.message()
        await dialog.accept()

        return message
    }

    async closeSignup() {
        await this.closeButton.click()
    }
}