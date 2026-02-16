class ProductsPage {
  constructor(page) {
    this.page = page;

    this.title = page.locator('.title');
    this.products = page.locator('.inventory_item');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.cartLink = page.locator('.shopping_cart_link');
    this.sortDropdown = page.locator('[data-test="product-sort-container"]');
  }

  async goto() {
    await this.page.goto('/inventory.html');
  }

  async verifyPageLoaded() {
    await this.title.waitFor();
  }

  async addFirstProductToCart() {
    await this.products.first().locator('button').click();
  }

  async getProductCount() {
    return await this.products.count();
  }

  async openCart() {
    await this.cartLink.click();
  }

  async getCartCount() {
    if (await this.cartBadge.isVisible()) {
      return await this.cartBadge.textContent();
    }
    return 0;
  }

  async sortBy(optionValue) {
    await this.sortDropdown.selectOption(optionValue);
  }
}

exports.ProductsPage = ProductsPage;
