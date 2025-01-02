// pages/SignUpPage.js
class SignUpPage {
    constructor(page) {
        this.page = page;
        this.signUpButton = '#signin2';
        this.usernameField = '#sign-username';
        this.passwordField = '#sign-password';
        this.submitButton = 'button:has-text("Sign up")';
        this.successMessage = 'dialog';
        this.errorMessage = 'dialog';
    }

    async navigateToSignUp() {
        await this.page.locator(this.signUpButton).click();
    }

    async fillSignUpForm(username, password) {
        await this.page.locator(this.usernameField).fill(username);
        await this.page.locator(this.passwordField).fill(password);
    }

    async submitSignUp() {
        await this.page.locator(this.submitButton).click();
    }

    async getDialogMessage() {
        const dialog = await this.page.waitForEvent('dialog');
        return dialog.message();
    }
}

export default SignUpPage;
