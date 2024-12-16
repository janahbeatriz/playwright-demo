import { test, expect } from '@playwright/test';
import * as helpers from '../utils/helper';  // Import everything from helper.js as 'helpers'
import * as data from '../utils/testData';   // Import everything from testData.js as 'data'

test.describe('demo tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(data.urls.demoStore);  // Use 'urls' from 'data'
  });

  test('has title', async ({ page }) => {
    await expect(page).toHaveTitle(data.selectors.title);  // Use title from 'data'
  });

  test('can sign up with validation user already exists', async ({ page }) => {
    await page.locator('#signin2').click(); 
    await expect(page.locator('.modal-content h5:has-text("Sign up")')).toBeVisible();
    await page.locator('#sign-username').fill('test123');
    await page.locator('#sign-password').fill('123456');
    await page.locator('button:has-text("Sign up")').click();
    page.on('dialog', async (dialog) => {
        // Expect the dialog message to be "This user already exists"
        await expect(dialog.message()).toBe('This user already exists');
        await dialog.accept();  // Accept the alert
      });
  });
});
