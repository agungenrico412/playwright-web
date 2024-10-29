import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Navigate to URL
  await page.goto('https://www.saucedemo.com/');

    // Login Steps
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  // Validate Homepage
  await expect(page.locator('[data-test="primary-header"]')).toContainText('Swag Labs'); 
  await expect(page.locator('[data-test="title"]')).toContainText('Products');
  await expect(page.locator('[data-test="product-sort-container"]')).toHaveValue('az');
  await expect(page.locator('[data-test="item-4-img-link"]')).toBeVisible();
});