const { test, expect, request } = require('@playwright/test');
const fs = require('fs');

if (!fs.existsSync('.auth')) {
  fs.mkdirSync('.auth');
}

test('Authenticate and save storage state', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await expect(page).toHaveURL(/inventory.html/);

  await context.storageState({ path: '.auth/storageState.json' });
  await context.close();
});
