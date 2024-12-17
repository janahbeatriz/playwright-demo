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

  test('can place order as a visitor', async ({ page }) => {
    await page.locator('a.hrefch:has-text("Nokia lumia 1520")').click();
    await expect(page).toHaveURL(/prod\.html\?idp_/); 
    await page.locator('a.btn-success:has-text("Add to cart")').click();
    const dialog = await page.waitForEvent('dialog');
    console.log('Alert message:', dialog.message());
    expect(dialog.message()).toEqual('Product added');
    await dialog.accept();

    //verify if added in the cart 
    await page.locator('a.nav-link:has-text("Cart")').click();
    // Check for specific elements in the row, such as product name, price, and image
    await expect(page.locator('tbody#tbodyid tr:has-text("Nokia lumia 1520")')).toBeVisible();
    await expect(page.locator('tbody#tbodyid tr:has-text("820")')).toBeVisible();
    await expect(page.locator('tbody#tbodyid tr img[src="imgs/Lumia_1520.jpg"]')).toBeVisible();

    //place order
    await page.locator('button.btn.btn-success[data-toggle="modal"][data-target="#orderModal"]').click();
    await expect(page.locator('#orderModalLabel')).toBeVisible();

    //populate form 
    await page.locator('#name').fill('QA test');
    await page.locator('#country').fill('FRANCE');
    await page.locator('#card').fill('422222222222');
    await page.locator('#year').fill('29');
    await page.locator('button:has-text("Purchase")').click();

    await expect(page.locator('.sweet-alert.showSweetAlert.visible')).toBeVisible();
    await page.locator('h2.hrefch:has-text("Thank you for your purchase!"').isVisible;
    await expect(page.locator('h2.hrefch:has-text("Thank you for your purchase!"')).toBeTruthy();
//  await expect(page.locator('h2')).toContainText('hank you for your purchase');
// await expect(page.locator('.lead.text-muted')).toContainText('Amount: 820 USD');
//  await page.locator('.sa-confirm-button-container .confirm').click();
  });
});
