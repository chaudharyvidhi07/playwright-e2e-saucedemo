const { test, expect } = require('@playwright/test');
const { ProductsPage } = require('../../pages/ProductsPage');
const { CheckoutPage } = require('../../pages/CheckoutPage');

test.describe('@regression @e2e Checkout Flow', () => {
  test('User can complete a purchase successfully', async ({ page }) => {
    await page.goto('/inventory.html');

    const productsPage = new ProductsPage(page);
    const checkoutPage = new CheckoutPage(page);

    await productsPage.addFirstProductToCart();
    await productsPage.openCart();

    await page.click('#checkout');

    await checkoutPage.fillCheckoutInfo('Vidhi', 'Tester', '12345');
    await checkoutPage.finishOrder();

    await expect(await checkoutPage.isOrderSuccessful()).toBeTruthy();
  });
});
