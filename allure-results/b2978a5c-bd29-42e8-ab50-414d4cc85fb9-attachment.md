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
Error: expect(locator).toBeVisible() failed

Locator:  locator('#logInModal')
Expected: visible
Received: hidden

Call log:
  - Expect "toBeVisible" with timeout 60000ms
  - waiting for locator('#logInModal')
    67 × locator resolved to <div tabindex="-1" role="dialog" id="logInModal" class="modal fade" aria-hidden="true" aria-labelledby="logInModalLabel">…</div>
       - unexpected value "hidden"
  - Test timeout of 40000ms exceeded.

```

```yaml
- navigation:
  - link "PRODUCT STORE":
    - /url: index.html
    - img
    - text: PRODUCT STORE
  - list:
    - listitem:
      - link "Home (current)":
        - /url: index.html
    - listitem:
      - link "Contact":
        - /url: "#"
    - listitem:
      - link "About us":
        - /url: "#"
    - listitem:
      - link "Cart":
        - /url: cart.html
    - listitem:
      - link "Log in":
        - /url: "#"
    - listitem
    - listitem
    - listitem:
      - link "Sign up":
        - /url: "#"
  - list:
    - listitem
    - listitem
    - listitem
  - img "First slide"
  - button "Previous"
  - button "Next"
- link "CATEGORIES":
  - /url: ""
- link "Phones":
  - /url: "#"
- link "Laptops":
  - /url: "#"
- link "Monitors":
  - /url: "#"
- link:
  - /url: prod.html?idp_=1
- heading "Samsung galaxy s6" [level=4]:
  - link "Samsung galaxy s6":
    - /url: prod.html?idp_=1
- heading "$360" [level=5]
- paragraph: The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage cannot be expanded.
- link:
  - /url: prod.html?idp_=2
- heading "Nokia lumia 1520" [level=4]:
  - link "Nokia lumia 1520":
    - /url: prod.html?idp_=2
- heading "$820" [level=5]
- paragraph: The Nokia Lumia 1520 is powered by 2.2GHz quad-core Qualcomm Snapdragon 800 processor and it comes with 2GB of RAM.
- link:
  - /url: prod.html?idp_=3
- heading "Nexus 6" [level=4]:
  - link "Nexus 6":
    - /url: prod.html?idp_=3
- heading "$650" [level=5]
- paragraph: The Motorola Google Nexus 6 is powered by 2.7GHz quad-core Qualcomm Snapdragon 805 processor and it comes with 3GB of RAM.
- link:
  - /url: prod.html?idp_=4
- heading "Samsung galaxy s7" [level=4]:
  - link "Samsung galaxy s7":
    - /url: prod.html?idp_=4
- heading "$800" [level=5]
- paragraph: The Samsung Galaxy S7 is powered by 1.6GHz octa-core it comes with 4GB of RAM. The phone packs 32GB of internal storage that can be expanded up to 200GB via a microSD card.
- link:
  - /url: prod.html?idp_=5
- heading "Iphone 6 32gb" [level=4]:
  - link "Iphone 6 32gb":
    - /url: prod.html?idp_=5
- heading "$790" [level=5]
- paragraph: It comes with 1GB of RAM. The phone packs 16GB of internal storage cannot be expanded. As far as the cameras are concerned, the Apple iPhone 6 packs a 8-megapixel primary camera on the rear and a 1.2-megapixel front shooter for selfies.
- link:
  - /url: prod.html?idp_=6
- heading "Sony xperia z5" [level=4]:
  - link "Sony xperia z5":
    - /url: prod.html?idp_=6
- heading "$320" [level=5]
- paragraph: Sony Xperia Z5 Dual smartphone was launched in September 2015. The phone comes with a 5.20-inch touchscreen display with a resolution of 1080 pixels by 1920 pixels at a PPI of 424 pixels per inch.
- link:
  - /url: prod.html?idp_=7
- heading "HTC One M9" [level=4]:
  - link "HTC One M9":
    - /url: prod.html?idp_=7
- heading "$700" [level=5]
- paragraph: The HTC One M9 is powered by 1.5GHz octa-core Qualcomm Snapdragon 810 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage that can be expanded up to 128GB via a microSD card.
- link:
  - /url: prod.html?idp_=8
- heading "Sony vaio i5" [level=4]:
  - link "Sony vaio i5":
    - /url: prod.html?idp_=8
- heading "$790" [level=5]
- paragraph: Sony is so confident that the VAIO S is a superior ultraportable laptop that the company proudly compares the notebook to Apple's 13-inch MacBook Pro. And in a lot of ways this notebook is better, thanks to a lighter weight.
- link:
  - /url: prod.html?idp_=9
- heading "Sony vaio i7" [level=4]:
  - link "Sony vaio i7":
    - /url: prod.html?idp_=9
- heading "$790" [level=5]
- paragraph: REVIEW Sony is so confident that the VAIO S is a superior ultraportable laptop that the company proudly compares the notebook to Apple's 13-inch MacBook Pro. And in a lot of ways this notebook is better, thanks to a lighter weight, higher-resolution display, more storage space, and a Blu-ray drive.
- list:
  - listitem:
    - button "Previous"
  - listitem:
    - button "Next"
- heading "About Us" [level=4]
- paragraph: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
- heading "Get in Touch" [level=4]
- paragraph: "Address: 2390 El Camino Real"
- paragraph: "Phone: +440 123456"
- paragraph: "Email: demo@blazemeter.com"
- heading "PRODUCT STORE" [level=4]:
  - img
  - text: PRODUCT STORE
- contentinfo:
  - paragraph: Copyright © Product Store
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
  18 | console.log('Pop up msg:',message)
  19 | //pop up accept
  20 | await dialog.accept()
  21 | await page.locator('#signInModal .modal-header button.close').click()
  22 | await expect(page.locator('#signInModal')).toBeHidden()
  23 | //login
  24 | await page.locator("#login2").click()
  25 | await page.fill('#loginusername', testData.username)
  26 | await page.fill('#loginpassword', testData.password)
  27 | await page.getByRole("button",{name:"Log in"}).click()
  28 | await expect(page.locator('#nameofuser')).toContainText(testData.username)
  29 | await page.locator('#logout2').click()
  30 | await expect(page.locator('#login2')).toBeVisible()
  31 | 
  32 | //invalid username and valid password
  33 | await page.locator("#login2").click()
> 34 | await expect(page.locator('#logInModal')).toBeVisible()
     |                                           ^ Error: expect(locator).toBeVisible() failed
  35 | await page.fill('#loginusername', 'invaliduser##')
  36 | await page.fill('#loginpassword', testData.password)
  37 | //login
  38 | const dialogDisplay1 = page.waitForEvent('dialog');
  39 | await page.getByRole("button",{name:"Log in"}).click()
  40 | const dialog1= await dialogDisplay1
  41 | //message
  42 | const message1=dialog1.message()
  43 | expect(message1).toBe('User does not exist.')
  44 | console.log('Popup msg:',message1)
  45 | await dialog1.accept()
  46 | //valid username and invalid password
  47 | 
  48 | await expect(page.locator('#logInModal')).tobeVisible()
  49 | //Enter valid username and invalid password
  50 | await page.fill('#loginusername', testData.username)
  51 | await page.fill('#loginpassword', 'WrongPassword****#')
  52 | const dialogDisplay2 = page.waitForEvent('dialog')
  53 | await page.getByRole("button",{name:"Log in"}).click()
  54 | // popup 
  55 | const dialog2 = await dialogDisplay2
  56 | const message2 = dialog2.message()
  57 | expect(message2).toBe('Wrong password.')
  58 | console.log('Popup msg:', message2)
  59 | await dialog2.accept()
  60 | //await page.waitForTimeout(3000)
  61 | 
  62 | })
```