import { test, expect } from '@playwright/test';
const { ProductsPage } = require('../../pages/ProductsPage');

test.describe('@smoke Products Page', () => {

  test('Products page loads and add to cart works', async ({ page }) => {

    const productsPage = new ProductsPage(page);

    await productsPage.goto();
    await productsPage.verifyPageLoaded();

    const count = await productsPage.getProductCount();
    expect(count).toBeGreaterThan(0);

    await productsPage.addFirstProductToCart();

    const cartCount = await productsPage.getCartCount();
    expect(cartCount).toBe('1');

  });
});
