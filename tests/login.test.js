// tests/login.test.js
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { urls } = require('../utils/testData');

test.describe('Login Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(urls.demoStore);
  });

  test('User can login and logout successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigateToLogin();
    await loginPage.login('qatest2024', '123456');
    await loginPage.verifyLoginSuccess();
    await loginPage.logout();
  });
});
