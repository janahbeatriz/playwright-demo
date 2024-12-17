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