const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');
const { ProductsPage } = require('../../pages/ProductsPage');

test.describe('@smoke @login', () => {
  test('User can login successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);

    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');

    // validate Product Page is loaded correctly
    const isProductsPageLoaded = await productsPage.isLoaded();
    await expect(isProductsPageLoaded).toBeTruthy();
    await expect(page).toHaveURL(/inventory.html/);
    await expect(page.locator('.app_logo')).toBeVisible();
  });
});