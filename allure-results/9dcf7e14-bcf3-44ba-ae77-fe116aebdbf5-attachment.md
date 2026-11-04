# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: FinalProject\FinalProjPOM.spec.js >> Add product to cart
- Location: tests\FinalProject\FinalProjPOM.spec.js:66:5

# Error details

```
ReferenceError: expect is not defined
```

# Page snapshot

```yaml
- generic [ref=f1e1]:
  - text:             
  - navigation [ref=f1e2]:
    - link "PRODUCT STORE" [ref=f1e3] [cursor=pointer]:
      - /url: index.html
    - list [ref=f1e6]:
      - listitem [ref=f1e7]:
        - link "Home (current)" [ref=f1e8] [cursor=pointer]:
          - /url: index.html
          - text: Home
          - generic [ref=f1e9]: (current)
      - listitem [ref=f1e10]:
        - link "Contact" [ref=f1e11] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=f1e12]:
        - link "About us" [ref=f1e13] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=f1e14]:
        - link "Cart" [ref=f1e15] [cursor=pointer]:
          - /url: cart.html
      - listitem [ref=f1e16]:
        - link "Log in" [ref=f1e17] [cursor=pointer]:
          - /url: "#"
      - listitem
      - listitem
      - listitem [ref=f1e18]:
        - link "Sign up" [ref=f1e19] [cursor=pointer]:
          - /url: "#"
    - generic [ref=f1e21]:
      - list [ref=f1e22]:
        - listitem [ref=f1e23] [cursor=pointer]
        - listitem [ref=f1e24] [cursor=pointer]
        - listitem [ref=f1e25] [cursor=pointer]
      - img "First slide" [ref=f1e28]
      - button "Previous" [ref=f1e29] [cursor=pointer]
      - button "Next" [ref=f1e32] [cursor=pointer]
  - generic [ref=f1e36]:
    - generic [ref=f1e38]:
      - link "CATEGORIES" [ref=f1e39] [cursor=pointer]:
        - /url: ""
      - link "Phones" [active] [ref=f1e40] [cursor=pointer]:
        - /url: "#"
      - link "Laptops" [ref=f1e41] [cursor=pointer]:
        - /url: "#"
      - link "Monitors" [ref=f1e42] [cursor=pointer]:
        - /url: "#"
    - list [ref=f1e45]:
      - listitem [ref=f1e46]:
        - button "Previous" [ref=f1e47]
      - listitem [ref=f1e48]:
        - button "Next" [ref=f1e49] [cursor=pointer]
  - generic [ref=f1e51]:
    - generic [ref=f1e54]:
      - heading "About Us" [level=4] [ref=f1e55]
      - paragraph [ref=f1e56]: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
    - generic [ref=f1e59]:
      - heading "Get in Touch" [level=4] [ref=f1e60]
      - paragraph [ref=f1e61]: "Address: 2390 El Camino Real"
      - paragraph [ref=f1e62]: "Phone: +440 123456"
      - paragraph [ref=f1e63]: "Email: demo@blazemeter.com"
    - heading "PRODUCT STORE" [level=4] [ref=f1e67]
  - contentinfo [ref=f1e69]:
    - paragraph [ref=f1e70]: Copyright © Product Store
```

# Test source

```ts
  1  | export default class ProductPage {
  2  |     constructor(page) {
  3  |         this.page = page
  4  |         this.addToCartButton = page.getByRole('link', { name: 'Add to cart' })
  5  |     }
  6  | 
  7  |     async selectProduct(category, productName) {
  8  | 
  9  |     // Select category
  10 |     await this.page.getByRole('link', {
  11 |         name: category,
  12 |         exact: true
  13 |     }).click()
  14 | 
  15 |     // Wait for product 
  16 |     const product = this.page.getByRole('link', {
  17 |         name: productName,
  18 |         exact: true
  19 |     })
  20 | 
> 21 |     await expect(product).toBeVisible({ timeout: 10000 })
     |     ^ ReferenceError: expect is not defined
  22 | 
  23 |     // Select product
  24 |     await product.click()
  25 | }
  26 | 
  27 |     async addToCart() {
  28 |         const [dialog] = await Promise.all([
  29 |             this.page.waitForEvent('dialog'),
  30 |             this.addToCartButton.click()
  31 |         ])
  32 | 
  33 |         const message = dialog.message()
  34 |         await dialog.accept()
  35 | 
  36 |         return message
  37 |     }
  38 | }
```