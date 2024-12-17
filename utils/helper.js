// helper.js
import { expect } from '@playwright/test';

export async function clickSignUpButton(page) {
  await page.locator('#signin2').click();  // Clicking the Sign Up button
}

export async function waitForModal(page) {
  await expect(page.locator('.modal-content')).toBeVisible();  // Expect modal to be visible
}
export function generateUniqueUsername() {
  const timestamp = Date.now(); // Current timestamp in milliseconds
  return `user_${timestamp}`; // Example: user_1700000000000
}
export async function signUp(page, username, password, selectors) {
  await page.locator(selectors.usernameField).fill(username); // Fill the username
  await page.locator(selectors.passwordField).fill(password); // Fill the password
  //await page.locator(selectors.signUpSubmitButton).click(); // Click the "Sign up" button
}
export async function addToCart(page, productName) {
  // Click the product link
  await page.locator(`a.hrefch:has-text("${productName}")`).click();
  
  // Ensure the product page has loaded
  await expect(page).toHaveURL(/prod\.html\?idp_/);
  
  // Add product to the cart
  await page.locator('a.btn-success:has-text("Add to cart")').click();
  
  // Wait for the dialog and verify the message
  const dialog = await page.waitForEvent('dialog');
  console.log('Alert message:', dialog.message());
  expect(dialog.message()).toEqual('Product added');
  
  // Accept the dialog
  await dialog.accept();
}
export async function extractPrices(page) {
  const rows = await page.locator('#tbodyid tr.success');
  const prices = await rows.allTextContents();
  return prices.map((rowText) => {
    const match = rowText.match(/\$(\d+(\.\d+)?)/);
    return match ? parseFloat(match[1]) : 0; // Return 0 if no valid price is found
  });
}
export async function getDisplayedTotal(page) {
  const totalText = await page.locator('.total-price-selector').textContent();
  return parseFloat(totalText.replace('$', '').trim());
}