import { expect } from '@playwright/test'
export default class ProductPage {
    constructor(page) {
        this.page = page
        this.addToCartButton = page.getByRole('link', { name: 'Add to cart' })
    }

 async selectProduct(category, productName) {

    // Select category
    await this.page.getByRole('link', {
        name: category,
        exact: true//access the exact category name and match it
    }).click()

    // Wait for the requested product
    const product = this.page.getByRole('link', {
        name: productName,
        exact: true
    })

    await expect(product).toBeVisible({ timeout: 15000 })

    // Select product
    await product.click()
}
//add selected product to cart-wait for alert to appear and click add to cart button

    async addToCart() {
        const [dialog] = await Promise.all([//both the alert & click event will be handled simultaneously
            this.page.waitForEvent('dialog'),
            this.addToCartButton.click()
        ])
//retrieves the message
        const message = dialog.message()
        await dialog.accept()//clicking ok

        return message//return the msg
    }
}