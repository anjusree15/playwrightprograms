# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: FinalProject\projectfinalPOM.spec.js >> DemoBlazeProject
- Location: tests\FinalProject\projectfinalPOM.spec.js:3:5

# Error details

```
Test timeout of 40000ms exceeded.
```

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('#loginusername')
Expected substring: "anjuanil123"
Received string:    ""

Call log:
  - Expect "toContainText" with timeout 60000ms
  - waiting for locator('#loginusername')
    4 × locator resolved to <input type="text" id="loginusername" class="form-control"/>
      - unexpected value ""
  - Test timeout of 40000ms exceeded.

```

```yaml
- textbox: anjuanil123
```

# Test source

```ts
  1  | import {test,expect } from '@playwright/test'
  2  | import testData from '../testData/testdata.json'
  3  | test('DemoBlazeProject', async ({page}) => {
  4  | await page.goto('https://www.demoblaze.com/')
  5  | //Open Signup
  6  | await page.locator("#signin2").click()
  7  | // Enter username and password
  8  | await page.fill('#sign-username', testData.username)
  9  | await page.fill('#sign-password', testData.password)
  10 | 
  11 | const dialogDisplay = page.waitForEvent('dialog');
  12 | //Signup
  13 | await page.getByRole("button",{name:"Sign up"}).click()
  14 | const dialog= await dialogDisplay
  15 | //popup
  16 | const message=dialog.message()
  17 | expect(['Sign up successful.','This user already exist.']).toContain(dialog.message())
  18 | console.log('Pop up message:',message)
  19 | //pop up accept
  20 | await dialog.accept()
  21 | //login
  22 | await page.locator("#login2").click()
  23 | await page.fill('#loginusername', testData.username)
  24 | await page.fill('#loginpassword', testData.password)
  25 | await page.getByRole("button",{name:"Log in"}).click()
> 26 | await expect(page.locator('#loginusername')).toContainText(testData.username)
     |                                              ^ Error: expect(locator).toContainText(expected) failed
  27 | //invalid username and valid password
  28 | await page.fill('#loginusername', 'invaliduser')
  29 | await page.fill('#loginpassword', testData.password)
  30 | //login
  31 | const dialogDisplay1 = page.waitForEvent('dialog');
  32 | await page.getByRole("button",{name:"Log in"}).click()
  33 | const dialog1= await dialogDisplay1
  34 | //message
  35 | const message1=dialog1.message()
  36 | expect(message1).toBe('User does not exist.')
  37 | await dialog1.accept()
  38 | await page.waitForTimeout(5000)
  39 | })
```