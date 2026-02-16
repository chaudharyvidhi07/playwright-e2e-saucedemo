const { test, expect } = require('@playwright/test');
const { ProductsPage } = require('../../pages/ProductsPage');

test.describe('@regression @negative Checkout Validation', () => {
  test('Checkout fails when required fields are missing', async ({ page }) => {
    await page.goto('/inventory.html');

    const productsPage = new ProductsPage(page);

    await productsPage.addFirstProductToCart();
    await productsPage.openCart();

    await page.click('#checkout');

    // Leave fields empty
    await page.click('#continue');

    const errorMessage = page.locator('[data-test="error"]');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText('First Name is required');
  });
});
