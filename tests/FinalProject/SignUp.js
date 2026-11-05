
export default class SignupPage {
    constructor(page) {
        this.page = page
        this.signupLink = page.locator('#signin2')
        this.username = page.locator('#sign-username')
        this.password = page.locator('#sign-password')
        this.signupButton = page.getByRole('button', { name: 'Sign up' })
        //Identify the Close button inside the Signup modal.
        this.closeButton = page.locator('#signInModal .modal-header button.close')
    }
//open the signup modal
    async openSignup() {
        await this.signupLink.click()
    }
//register a  new user
    async signup(username, password) {
        await this.username.fill(username)
        await this.password.fill(password)
//2actions are performed parallely-waitng for the alert dialog&clicking the signup button
        const [dialog] = await Promise.all([
            this.page.waitForEvent('dialog'),
            this.signupButton.click()
        ])
//retrieves msg
        const message = dialog.message()
        await dialog.accept()//clicks ok

        return message
    }
//close the signup modal
    async closeSignup() {
        await this.closeButton.click()
    }
}