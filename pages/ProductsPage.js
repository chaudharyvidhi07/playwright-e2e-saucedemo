class ProductsPage {
  constructor(page) {
    this.page = page;
    this.productsTitle = '.title';
  }

  async isLoaded() {
    return this.page.isVisible(this.productsTitle);
  }
}

module.exports = { ProductsPage };
