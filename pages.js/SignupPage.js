const { expect } = require("@playwright/test");

exports.Register = class Register {
  constructor(page) {
    this.page = page;
    this.consent = page.getByText("אני מסכים לתנאי השימוש באתר");
    this.loginBtn = page.locator(
      "xpath = /html/body/nav/div[1]/div[3]/div[2]/div"
    );
    this.nameField = page.locator("#user-d21758b");
    this.passwordField = page.locator("#password-d21758b");
    this.signUpBtn = page.locator(
      "button[type='submit'][name='wp-submit'].elementor-button span.elementor-button-text"
    );
    this.disconnectBtn = page.locator('div[data-id="0b8fbbd"] span.elementor-button-text').nth(0);
    this.pesronalArea = page.locator('//html/body/nav/div[1]/div[3]/div[1]/div/div/a/i');
    
    this.firstAd = page.locator('//*[@id="posts-container"]/div/div[2]/div[1]/div/h4/a').nth(0);  // 
      // this.textElement = page.locator(`ul.elementor-icon-list-items li span:has-text("${this.expectedText}")`);
    this.adTitle = page.locator("'//h1[contains(text(), 'כרמיאל 26')]'");
    
  }

  async validateCorrectPage() {
    await expect(this.disconnectBtn).toContainText("התנתק");
  }

  async logOut() {
    await this.disconnectBtn.click();
  }

  async enterPersonalArea() {
    await this.pesronalArea.click();
  }

  async enterFirstAd() {
    await this.firstAd.click();
  }
}