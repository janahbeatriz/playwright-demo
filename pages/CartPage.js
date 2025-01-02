// pages/CartPage.js

class CartPage {
    constructor(page) {
      this.page = page;
      this.cartLink = 'a.nav-link:has-text("Cart")';
      this.cartItems = 'tbody#tbodyid tr';
      this.totalPrice = '#totalp';
      this.checkoutButton = 'button.btn.btn-success[data-toggle="modal"][data-target="#orderModal"]';
      this.nameField = '#name';
      this.countryField = '#country';
      this.cardField = '#card';
      this.yearField = '#year';
      this.purchaseButton = 'button:has-text("Purchase")';
      this.confirmationMessage = '.sweet-alert.showSweetAlert.visible';
    }
  
    async navigateToCart() {
      await this.page.locator(this.cartLink).click();
    }
  
    async verifyCartItem(productName, productPrice, productImage) {
      // Verify the product in the cart
      await expect(this.page.locator(`tbody#tbodyid tr:has-text("${productName}")`)).toBeVisible();
      await expect(this.page.locator(`tbody#tbodyid tr:has-text("${productPrice}")`)).toBeVisible();
      await expect(this.page.locator(`tbody#tbodyid tr img[src="${productImage}"]`)).toBeVisible();
    }
  
    async placeOrder(name, country, card, year) {
      // Open order modal and fill the order form
      await this.page.locator(this.checkoutButton).click();
      await expect(this.page.locator('#orderModalLabel')).toBeVisible();
  
      // Fill the form with order details
      await this.page.locator(this.nameField).fill(name);
      await this.page.locator(this.countryField).fill(country);
      await this.page.locator(this.cardField).fill(card);
      await this.page.locator(this.yearField).fill(year);
      
      // Confirm purchase
      await this.page.locator(this.purchaseButton).click();
      await expect(this.page.locator(this.confirmationMessage)).toBeVisible();
    }
  
    async verifyPurchaseConfirmation(amount) {
      // Confirm the purchase confirmation message and amount
      await expect(this.page.locator('h2.hrefch:has-text("Thank you for your purchase!")')).toBeVisible();
      await expect(this.page.locator('.lead.text-muted')).toContainText(`Amount: ${amount}`);
      await this.page.locator('.sa-confirm-button-container .confirm').click();
    }
  
    async verifyTotalPrice() {
      // Calculate the total price from the cart items
      const prices = await this.page.locator('table tbody tr.success td:nth-child(3)').allTextContents();
      const totalPrice = prices.reduce((sum, price) => sum + parseFloat(price.trim()), 0);
      
      // Verify the total price on the page
      const displayedTotalPrice = await this.page.locator(this.totalPrice).textContent();
      const tp = parseFloat(displayedTotalPrice.trim());
      expect(tp).toEqual(totalPrice);
    }
  }
  
  export default CartPage;
  