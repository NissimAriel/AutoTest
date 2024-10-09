const { expect } = require("@playwright/test");

exports.PersonalPage = class PersonalPage{

    constructor(page){

        this.page = page;
        this.publisButton = page.getByRole('link', { name: 'פרסם מודעה' });
    }

    async publishButtonClick() {
        //await this.page.pause();
        await this.publisButton.click();
        
        
        
    }
    }
    








