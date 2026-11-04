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
        exact: true
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
    async addToCart() {
        const [dialog] = await Promise.all([
            this.page.waitForEvent('dialog'),
            this.addToCartButton.click()
        ])

        const message = dialog.message()
        await dialog.accept()

        return message
    }
}