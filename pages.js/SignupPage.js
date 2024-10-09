const { expect } = require("@playwright/test");

exports.RegisterPage = class RegisterPage {
  
  constructor(page) {
    this.page = page;
    this.consent = page.getByText('אני מסכים לתנאי השימוש באתר');
    this.loginBtn = page.locator('xpath = /html/body/nav/div[1]/div[3]/div[2]/div');
    this.nameField = page.locator('#user-d21758b');
    this.passwordField = page.locator('#password-d21758b');
    this.signUpBtn = page.locator("button[type='submit'][name='wp-submit'].elementor-button span.elementor-button-text");
    this.disconnectBtn = page.locator('div[data-id="0b8fbbd"] span.elementor-button-text');
  }

  
  
  
  async validateCorrectPage() {
    await expect(this.disconnectBtn).toContainText('התנתק');

  }
}  

