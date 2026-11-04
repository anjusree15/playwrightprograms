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
Error: page.fill: Test timeout of 40000ms exceeded.
Call log:
  - waiting for locator('#loginusername')
    - locator resolved to <input type="text" id="loginusername" class="form-control"/>
    - fill("invaliduser")
  - attempting fill action
    2 × waiting for element to be visible, enabled and editable
      - element is not visible
    - retrying fill action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and editable
      - element is not visible
    - retrying fill action
      - waiting 100ms
    65 × waiting for element to be visible, enabled and editable
       - element is not visible
     - retrying fill action
       - waiting 500ms

```

# Page snapshot

```yaml
- generic [ref=f2e1]:
  - text:             
  - navigation [ref=f2e2]:
    - link "PRODUCT STORE" [ref=f2e3] [cursor=pointer]:
      - /url: index.html
    - list [ref=f2e6]:
      - listitem [ref=f2e7]:
        - link "Home (current)" [ref=f2e8] [cursor=pointer]:
          - /url: index.html
          - text: Home
          - generic [ref=f2e9]: (current)
      - listitem [ref=f2e10]:
        - link "Contact" [ref=f2e11] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=f2e12]:
        - link "About us" [ref=f2e13] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=f2e14]:
        - link "Cart" [ref=f2e15] [cursor=pointer]:
          - /url: cart.html
      - listitem [ref=f2e16]:
        - link "Log in" [active] [ref=f2e17] [cursor=pointer]:
          - /url: "#"
      - listitem
      - listitem
      - listitem [ref=f2e18]:
        - link "Sign up" [ref=f2e19] [cursor=pointer]:
          - /url: "#"
    - generic [ref=f2e21]:
      - list [ref=f2e22]:
        - listitem [ref=f2e23] [cursor=pointer]
        - listitem [ref=f2e24] [cursor=pointer]
        - listitem [ref=f2e25] [cursor=pointer]
      - img "Third slide" [ref=f2e28]
      - button "Previous" [ref=f2e29] [cursor=pointer]
      - button "Next" [ref=f2e32] [cursor=pointer]
  - generic [ref=f2e36]:
    - generic [ref=f2e38]:
      - link "CATEGORIES" [ref=f2e39] [cursor=pointer]:
        - /url: ""
      - link "Phones" [ref=f2e40] [cursor=pointer]:
        - /url: "#"
      - link "Laptops" [ref=f2e41] [cursor=pointer]:
        - /url: "#"
      - link "Monitors" [ref=f2e42] [cursor=pointer]:
        - /url: "#"
    - generic [ref=f2e43]:
      - generic [ref=f2e44]:
        - generic [ref=f2e46]:
          - link [ref=f2e47] [cursor=pointer]:
            - /url: prod.html?idp_=1
          - generic [ref=f2e48]:
            - heading [level=4] [ref=f2e49]:
              - link "Samsung galaxy s6" [ref=f2e50] [cursor=pointer]:
                - /url: prod.html?idp_=1
            - heading "$360" [level=5] [ref=f2e51]
            - paragraph [ref=f2e52]: The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage cannot be expanded.
        - generic [ref=f2e54]:
          - link [ref=f2e55] [cursor=pointer]:
            - /url: prod.html?idp_=2
          - generic [ref=f2e56]:
            - heading [level=4] [ref=f2e57]:
              - link "Nokia lumia 1520" [ref=f2e58] [cursor=pointer]:
                - /url: prod.html?idp_=2
            - heading "$820" [level=5] [ref=f2e59]
            - paragraph [ref=f2e60]: The Nokia Lumia 1520 is powered by 2.2GHz quad-core Qualcomm Snapdragon 800 processor and it comes with 2GB of RAM.
        - generic [ref=f2e62]:
          - link [ref=f2e63] [cursor=pointer]:
            - /url: prod.html?idp_=3
          - generic [ref=f2e64]:
            - heading [level=4] [ref=f2e65]:
              - link "Nexus 6" [ref=f2e66] [cursor=pointer]:
                - /url: prod.html?idp_=3
            - heading "$650" [level=5] [ref=f2e67]
            - paragraph [ref=f2e68]: The Motorola Google Nexus 6 is powered by 2.7GHz quad-core Qualcomm Snapdragon 805 processor and it comes with 3GB of RAM.
        - generic [ref=f2e70]:
          - link [ref=f2e71] [cursor=pointer]:
            - /url: prod.html?idp_=4
          - generic [ref=f2e72]:
            - heading [level=4] [ref=f2e73]:
              - link "Samsung galaxy s7" [ref=f2e74] [cursor=pointer]:
                - /url: prod.html?idp_=4
            - heading "$800" [level=5] [ref=f2e75]
            - paragraph [ref=f2e76]: The Samsung Galaxy S7 is powered by 1.6GHz octa-core it comes with 4GB of RAM. The phone packs 32GB of internal storage that can be expanded up to 200GB via a microSD card.
        - generic [ref=f2e78]:
          - link [ref=f2e79] [cursor=pointer]:
            - /url: prod.html?idp_=5
          - generic [ref=f2e80]:
            - heading [level=4] [ref=f2e81]:
              - link "Iphone 6 32gb" [ref=f2e82] [cursor=pointer]:
                - /url: prod.html?idp_=5
            - heading "$790" [level=5] [ref=f2e83]
            - paragraph [ref=f2e84]: It comes with 1GB of RAM. The phone packs 16GB of internal storage cannot be expanded. As far as the cameras are concerned, the Apple iPhone 6 packs a 8-megapixel primary camera on the rear and a 1.2-megapixel front shooter for selfies.
        - generic [ref=f2e86]:
          - link [ref=f2e87] [cursor=pointer]:
            - /url: prod.html?idp_=6
          - generic [ref=f2e88]:
            - heading [level=4] [ref=f2e89]:
              - link "Sony xperia z5" [ref=f2e90] [cursor=pointer]:
                - /url: prod.html?idp_=6
            - heading "$320" [level=5] [ref=f2e91]
            - paragraph [ref=f2e92]: Sony Xperia Z5 Dual smartphone was launched in September 2015. The phone comes with a 5.20-inch touchscreen display with a resolution of 1080 pixels by 1920 pixels at a PPI of 424 pixels per inch.
        - generic [ref=f2e94]:
          - link [ref=f2e95] [cursor=pointer]:
            - /url: prod.html?idp_=7
          - generic [ref=f2e96]:
            - heading [level=4] [ref=f2e97]:
              - link "HTC One M9" [ref=f2e98] [cursor=pointer]:
                - /url: prod.html?idp_=7
            - heading "$700" [level=5] [ref=f2e99]
            - paragraph [ref=f2e100]: The HTC One M9 is powered by 1.5GHz octa-core Qualcomm Snapdragon 810 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage that can be expanded up to 128GB via a microSD card.
        - generic [ref=f2e102]:
          - link [ref=f2e103] [cursor=pointer]:
            - /url: prod.html?idp_=8
          - generic [ref=f2e104]:
            - heading [level=4] [ref=f2e105]:
              - link "Sony vaio i5" [ref=f2e106] [cursor=pointer]:
                - /url: prod.html?idp_=8
            - heading "$790" [level=5] [ref=f2e107]
            - paragraph [ref=f2e108]: Sony is so confident that the VAIO S is a superior ultraportable laptop that the company proudly compares the notebook to Apple's 13-inch MacBook Pro. And in a lot of ways this notebook is better, thanks to a lighter weight.
        - generic [ref=f2e110]:
          - link [ref=f2e111] [cursor=pointer]:
            - /url: prod.html?idp_=9
          - generic [ref=f2e112]:
            - heading [level=4] [ref=f2e113]:
              - link "Sony vaio i7" [ref=f2e114] [cursor=pointer]:
                - /url: prod.html?idp_=9
            - heading "$790" [level=5] [ref=f2e115]
            - paragraph [ref=f2e116]: REVIEW Sony is so confident that the VAIO S is a superior ultraportable laptop that the company proudly compares the notebook to Apple's 13-inch MacBook Pro. And in a lot of ways this notebook is better, thanks to a lighter weight, higher-resolution display, more storage space, and a Blu-ray drive.
      - list [ref=f2e118]:
        - listitem [ref=f2e119]:
          - button "Previous" [ref=f2e120]
        - listitem [ref=f2e121]:
          - button "Next" [ref=f2e122] [cursor=pointer]
  - generic [ref=f2e124]:
    - generic [ref=f2e127]:
      - heading "About Us" [level=4] [ref=f2e128]
      - paragraph [ref=f2e129]: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
    - generic [ref=f2e132]:
      - heading "Get in Touch" [level=4] [ref=f2e133]
      - paragraph [ref=f2e134]: "Address: 2390 El Camino Real"
      - paragraph [ref=f2e135]: "Phone: +440 123456"
      - paragraph [ref=f2e136]: "Email: demo@blazemeter.com"
    - heading "PRODUCT STORE" [level=4] [ref=f2e140]
  - contentinfo [ref=f2e142]:
    - paragraph [ref=f2e143]: Copyright © Product Store
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
> 34 | await page.fill('#loginusername', 'invaliduser')
     |            ^ Error: page.fill: Test timeout of 40000ms exceeded.
  35 | await page.fill('#loginpassword', testData.password)
  36 | //login
  37 | const dialogDisplay1 = page.waitForEvent('dialog');
  38 | await page.getByRole("button",{name:"Log in"}).click()
  39 | const dialog1= await dialogDisplay1
  40 | //message
  41 | const message1=dialog1.message()
  42 | expect(message1).toBe('User does not exist.')
  43 | console.log('Popup msg:',message1)
  44 | await dialog1.accept()
  45 | 
  46 | await page.waitForTimeout(3000)
  47 | 
  48 | })
```