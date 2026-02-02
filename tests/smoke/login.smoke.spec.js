const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');
const { ProductsPage } = require('../../pages/ProductsPage');

test.describe('@smoke @login', () => {
  test('User is already logged in using storage state', async ({ page }) => {
    await page.goto('/inventory.html');
    await expect(page).toHaveURL(/inventory.html/);
    await expect(page.locator('.app_logo')).toBeVisible();
  });
});