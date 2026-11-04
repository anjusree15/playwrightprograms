
import { test, expect } from '@playwright/test'
import testData from '../testData/testdata.json'

test('DemoBlazeProject', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/')

  // Signup
  await page.locator('#signin2').click()
  await page.fill('#sign-username', testData.username)
  await page.fill('#sign-password', testData.password)

  const [signupDialog] = await Promise.all([
    page.waitForEvent('dialog'),
    page.getByRole('button', { name: 'Sign up' }).click(),
  ])
  expect(['Sign up successful.', 'This user already exist.']).toContain(signupDialog.message())
  await signupDialog.accept()
  await page.locator('#signInModal .modal-header button.close').click()
  await expect(page.locator('#signInModal')).toBeHidden()

  // Valid login
  await page.locator('#login2').click()
  await page.fill('#loginusername', testData.username)
  await page.fill('#loginpassword', testData.password)
  await page.getByRole('button', { name: 'Log in' }).click()
  await expect(page.locator('#nameofuser')).toContainText(testData.username)

  // wait for the reload  
  await Promise.all([
    page.waitForEvent('load'),
    page.locator('#logout2').click(),
  ])
  await expect(page.locator('#nameofuser')).toBeHidden()
  await expect(page.locator('#login2')).toBeVisible()

  // Invalid username, valid password
  await page.locator('#login2').click()
  await expect(page.locator('#logInModal')).toBeVisible()
  await page.fill('#loginusername', 'invaliduser##')
  await page.fill('#loginpassword', testData.password)

  const [dialog1] = await Promise.all([
    page.waitForEvent('dialog'),
    page.getByRole('button', { name: 'Log in' }).click(),
  ])
  expect(dialog1.message()).toBe('User does not exist.')
  await dialog1.accept()

  // Valid username, wrong password 
  await expect(page.locator('#logInModal')).toBeVisible()
  await page.fill('#loginusername', testData.username)
  await page.fill('#loginpassword', 'WrongPassword****#')

  const [dialog2] = await Promise.all([
    page.waitForEvent('dialog'),
    page.getByRole('button', { name: 'Log in' }).click(),
  ])
  expect(dialog2.message()).toBe('Wrong password.')
  await dialog2.accept()

//Invali username, wrong password
 await expect(page.locator('#logInModal')).toBeVisible()
  await page.fill('#loginusername', 'invaliduser##')
  await page.fill('#loginpassword', 'WrongPassword****#')

  const [dialog3] = await Promise.all([
    page.waitForEvent('dialog'),
    page.getByRole('button', { name: 'Log in' }).click(),
  ])
  expect(dialog3.message()).toBe('User does not exist.')
  await dialog3.accept()
  
})