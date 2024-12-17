import { test, expect } from '@playwright/test';
import * as helpers from '../utils/helper';  // Import everything from helper.js as 'helpers'
import * as data from '../utils/testData';   // Import everything from testData.js as 'data'

test.describe('Sign-up tests', () => {
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
    const dialog = await page.waitForEvent('dialog');
    console.log('Alert message:', dialog.message());
    expect(dialog.message()).toEqual('This user already exist.');
    await dialog.accept();
  });
  test('can sign up successfully', async ({ page }) => {
    const username = helpers.generateUniqueUsername(); // Generate random username
    const password = 'Test@1234'; // Simple static password

    // Click the "Sign up" button to open the sign-up form
    await page.locator('#signin2').click(); 


    // Wait for the sign-up modal to be visible
    await expect(page.locator('.modal-content h5:has-text("Sign up")')).toBeVisible();

    // Fill out the form and submit
    await helpers.signUp(page, username, password, data.selectors);
    await page.locator('button:has-text("Sign up")').click();
    const dialog = await page.waitForEvent('dialog');
    console.log('Alert message:', dialog.message());
    expect(dialog.message()).toEqual('Sign up successful.');
    await dialog.accept();
  });
});
