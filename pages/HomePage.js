// pages/HomePage.js
class HomePage {
    constructor(page) {
      this.page = page;
    }
  
    async navigate() {
      await this.page.goto('https://www.demoblaze.com/');
    }
  
    async getTitle() {
      return await this.page.title();
    }
  }
  
  module.exports = { HomePage };
  