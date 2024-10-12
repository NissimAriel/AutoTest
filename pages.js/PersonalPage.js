const { expect } = require("@playwright/test");

exports.PersonalPage = class PersonalPage{

    constructor(page){

        this.page = page;
        this.publisButton = page.locator('//span[contains(@class, "elementor-button-content-wrapper")]//span[contains(@class, "elementor-button-text") and text()="פרסם מודעה"]').nth(0);
    }

    async publishButtonClick() {
        
        await this.publisButton.click();
        
        
        
    }
    }
    








