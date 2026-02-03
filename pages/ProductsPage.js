class ProductsPage {
  constructor(page) {
    this.page = page;

    this.addToCartButton = '.inventory_item button';
    this.cartIcon = '.shopping_cart_link';
  }

  async addFirstProductToCart() {
    await this.page.locator(this.addToCartButton).first().click();
  }

  async openCart() {
    await this.page.click(this.cartIcon);
  }
}

module.exports = { ProductsPage };
