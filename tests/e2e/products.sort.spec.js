import { test, expect } from '@playwright/test';
const { ProductsPage } = require('../../pages/ProductsPage');

test.describe('@regression Product Sorting', () => {

  test('Sort products by price low to high', async ({ page }) => {

    const productsPage = new ProductsPage(page);

    await productsPage.goto();
    await productsPage.verifyPageLoaded();

    await productsPage.sortBy('lohi');

    const prices = await page.locator('.inventory_item_price').allTextContents();
    const numericPrices = prices.map(p => Number(p.replace('$', '')));

    const sortedPrices = [...numericPrices].sort((a, b) => a - b);

    expect(numericPrices).toEqual(sortedPrices);

  });
});
