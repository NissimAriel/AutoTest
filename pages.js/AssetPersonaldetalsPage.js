const { expect } = require("@playwright/test");

exports.AssetPersonalDetais = class AssetPersonalDetais{

    constructor(page){

        this.page = page;
        this.nameField = page.locator('#ff_8_name_full');
        this.phoneNum = page.locator('#ff_8_phone_number');
        this.publishBtn = page.getByText("פרסום הנכס");

    }


    async insertName(value){
        await this.nameField.fill(value);
    }

    async insertPhone(value){
        await this.phoneNum.fill(value);
    }

    async submitAd(){
        await this.page.evaluate(() => {
            // Locate the form element and submit it
            document.querySelector('form').submit();
          });
        
    }






} 

