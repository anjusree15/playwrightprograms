export default class CartPage {
    constructor(page) {
        this.page = page
        this.cartLink = page.locator('#cartur')
        this.placeOrderButton = page.getByRole('button', { name: 'Place Order' })

        this.name = page.locator('#name')
        this.country = page.locator('#country')
        this.city = page.locator('#city')
        this.card = page.locator('#card')
        this.month = page.locator('#month')
        this.year = page.locator('#year')

        this.purchaseButton = page.getByRole('button', { name: 'Purchase' })
    }

    async openCart() {
        await this.cartLink.click()
    }

    async purchase(name, country, city, card, month, year) {
        await this.placeOrderButton.click()

        await this.name.fill(name)
        await this.country.fill(country)
        await this.city.fill(city)
        await this.card.fill(card)
        await this.month.fill(month)
        await this.year.fill(year)

        await this.purchaseButton.click()
    }
}