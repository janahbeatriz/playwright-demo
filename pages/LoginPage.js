// pages/LoginPage.js
const { expect } = require('@playwright/test');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.loginButton = '#login2';
    this.usernameField = '#loginusername';
    this.passwordField = '#loginpassword';
    this.submitButton = 'button:has-text("Log in")';
    this.userWelcomeText = '#nameofuser';
    this.logoutButton = '#logout2';
  }

  async navigateToLogin() {
    await this.page.click(this.loginButton);
  }

  async login(username, password) {
    await this.page.fill(this.usernameField, username);
    await this.page.fill(this.passwordField, password);
    await this.page.click(this.submitButton);
  }

  async verifyLoginSuccess() {
    await expect(this.page.locator(this.userWelcomeText)).toBeVisible();
  }

  async logout() {
    await this.page.click(this.logoutButton);
    await expect(this.page.locator(this.userWelcomeText)).toBeVisible();
  }
}

module.exports = { LoginPage };
