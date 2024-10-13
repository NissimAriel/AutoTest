const { expect } = require("@playwright/test");

exports.AssetPayments = class AssetPayments {
  constructor(page) {
    this.page = page;
    this.credit = page.locator("#ff_8_credits");
    this.price = page.locator("#ff_8_price");
    this.houseCommitte = page.locator("#ff_8_house_committee");
    this.taxs = page.locator("#ff_8_tax_asset");
    this.opendatePicker = page.locator('input[name="date_start"]');
    this.months = page.locator("select.flatpickr-monthDropdown-months");
    this.days = page.locator(".flatpickr-day").filter({hasText: "November 15, 2024"});
    this.day = page.locator('.dayContainer .flatpickr-day').nth(20);
    this.nxtbtnForPic = page.locator('.ff-float-right.ff-btn.ff-btn-next.ff-btn-secondary').nth(3);
    this.prevButton = page.locator('.ff-btn.ff-btn-prev.ff-btn-secondary').nth(3);
  }

  async pickPaymentNum(value) {
    await this.credit.clear();
    await this.credit.fill(value);
  }

  async pickPrice(value) {
    await this.price.clear();
    await this.price.fill(value);
  }

  async insertHC(value) {
    await this.houseCommitte.clear();
    await this.houseCommitte.fill(value);
  }

  async insertTaxes(value) {
    await this.taxs.clear();
    await this.taxs.fill(value);
  }

  async selectMonth(monthName) {
    await this.opendatePicker.click();

    const monthIndex = new Date(Date.parse(monthName + " 1, 2024")).getMonth();

    // Check if the monthIndex is valid (0 to 11)
    if (monthIndex < 0 || monthIndex > 11) {
      throw new Error(
        "Invalid month name. Please provide a valid month (e.g., 'January')."
      );
    }

    // Iterate through each month using a for loop
    for (let i = 0; i <= 11; i++) {
      // Select each month by value
      await this.months.selectOption({ value: i.toString() });

      // If the current index matches the target month index break
      if (i === monthIndex) {
        break;
      }
    }
    
}
  
  
  async setDay(){

    await this.day.click(); 

  }


    
  
  
  async nextBtnToPic() {
    await this.nxtbtnForPic.click();
    //await this.prevButton.click();
  }

};
