const { expect } = require("@playwright/test");

exports.AssetPersonalDetais = class AssetPersonalDetais{

    constructor(page){

        this.page = page;
        this.nameField = page.locator('#ff_8_name_full');
        this.phoneNum = page.locator('#ff_8_phone_number');
        this.publishBtn = page.locator('.ff-btn.ff-btn-submit.ff-btn-md.publish-asset.ff_btn_style');

    }


    async insertName(value){
        await this.nameField.clear();
        await this.nameField.fill(value);
    }

    async insertPhone(value){
        await this.phoneNum.clear();
        await this.phoneNum.fill(value);
    }

    // async submitAd(){
    //     await this.publishBtn.click();
    //       }
        
}

