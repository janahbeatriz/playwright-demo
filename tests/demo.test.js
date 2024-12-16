const { test, expect } = require('@playwright/test');

test('Check if DemoBlaze homepage works', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  const title = await page.title();
  expect(title).toBe('STORE');
});