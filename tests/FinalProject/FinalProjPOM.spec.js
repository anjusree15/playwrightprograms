import { test, expect } from '@playwright/test'
import testData from '../testData/testdata.json'  with { type: 'json' }
import SignupPage from './SignUp.js'
import LoginPage from './login.js'
import ProductPage from './products.js'
import CartPage from './Cart.js'
//this executes before each test case in this file
test.beforeEach(async ({ page }) => {
    await page.goto('https://www.demoblaze.com/')
})
// 1. Signup with valid data
test('Signup with valid data', async ({ page }) => {
    const signup = new SignupPage(page)
    await signup.openSignup()
    const message = await signup.signup(testData.username,testData.password)
    expect(['Sign up successful.','This user already exist.']).toContain(message)
    await signup.closeSignup()
})
// 2. Signup and click Close
test('Signup and close', async ({ page }) => {
    const signup = new SignupPage(page)//object
    await signup.openSignup()//open the signup modal
    await page.locator('#sign-username').fill(testData.username)//fill username
    await page.locator('#sign-password').fill(testData.password)//fill password
    await signup.closeSignup()//click close button
    await expect(page.locator('#signInModal')).toBeHidden()//verify modal is closed
})

// 3. Valid username and password
test('Valid Login', async ({ page }) => {
const login = new LoginPage(page)//object
await login.login(testData.username, testData.password)//login with valid credentials
//verify the welcome message contains the logged-in username
await expect(login.welcomeUser).toContainText(testData.username)

})

// 4. Invalid username and valid password
test('Invalid username and valid password', async ({ page }) => {
const login = new LoginPage(page)//object
const message = await login.loginWithInvalidCredentials('invaliduser_987654',testData.password)
expect(message).toBe('User does not exist.')//verifies expected alert msg
})
// 5. Valid username and invalid password
test('Valid username and invalid password', async ({ page }) => {
const login = new LoginPage(page)
const message = await login.loginWithInvalidCredentials(testData.username,'WrongPassword123')
    expect(message).toBe('Wrong password.')
})
// 6. Invalid username and invalid password
test('Invalid username and invalid password', async ({ page }) => {
const login = new LoginPage(page)
const message = await login.loginWithInvalidCredentials('invaliduser_987654','WrongPassword123')
    expect(message).toBe('User does not exist.')
})
// 7. Login, select product and add to cart
test('Add product to cart', async ({ page }) => {
const login = new LoginPage(page)
const product = new ProductPage(page)
await login.login(testData.username, testData.password)
await product.selectProduct('Phones', 'Samsung galaxy s6')
const message = await product.addToCart()
expect(message).toBe('Product added.')
})
// 8. Login, select phone and purchase
test('Purchase phone', async ({ page }) => {
const login = new LoginPage(page)
const product = new ProductPage(page)
const cart = new CartPage(page)
await login.login(testData.username, testData.password)
await product.selectProduct('Phones', 'Samsung galaxy s6')
const message = await product.addToCart()
expect(message).toBe('Product added.')
await cart.openCart()
await cart.purchase('Anju','Bahrain','Manama','123456789','November','2026'
    )
await expect(page.locator('.sweet-alert h2')).toHaveText('Thank you for your purchase!')
})

// 9. Login, select monitor and purchase
test('Purchase monitor', async ({ page }) => {
const login = new LoginPage(page)
    const product = new ProductPage(page)
    const cart = new CartPage(page)
 await login.login(testData.username, testData.password)
await product.selectProduct('Monitors', 'Apple monitor 24')
const message = await product.addToCart()
expect(message).toBe('Product added.')
await cart.openCart()
await cart.purchase('Anju','Bahrain','Manama','123456789','November','2026')
await expect(page.locator('.sweet-alert h2')).toHaveText('Thank you for your purchase!')
})
// 10. Login and logout
test('Login and Logout', async ({ page }) => {
const login = new LoginPage(page)
await login.login(testData.username, testData.password)
await expect(login.welcomeUser).toContainText(testData.username)
await login.logout()
await expect(login.loginLink).toBeVisible()
})