import { test, expect } from '@playwright/test';
import * as helpers from '../utils/helper';  // Import everything from helper.js as 'helpers'
import * as data from '../utils/testData';   // Import everything from testData.js as 'data'

test.describe('Login tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(data.urls.demoStore);  // Use 'urls' from 'data'
  });

  test('has title', async ({ page }) => {
    await expect(page).toHaveTitle(data.selectors.title);  // Use title from 'data'
  });

  test('can login and logout successfully', async ({ page }) => {
    await page.locator('#login2').click(); 
    await expect(page.locator('.modal-content h5:has-text("Log in")')).toBeVisible();
    await page.locator('#loginusername').fill('qatest2024');
    await page.locator('#loginpassword').fill('123456');
    await page.locator('button:has-text("Log in")').click();
    await expect(page.locator('#nameofuser')).toBeVisible();
    await page.locator('#logout2').click();
    await expect(page.locator('#nameofuser')).not.toBeVisible();
  });
});
