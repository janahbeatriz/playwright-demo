// tests/demo.test.js
const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');

test('Check if DemoBlaze homepage works', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigate();
  const title = await homePage.getTitle();
  expect(title).toBe('STORE');
});
