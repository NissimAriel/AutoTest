const { expect } = require("@playwright/test");

exports.AssetFeatures = class AssetFeatures{

    constructor(page){
        this.page = page;
        this.featureArray = page.locator('.ff-el-image-input-src');
        this.addDetails = page.locator('#ff_8_asset_description');
        this.nextBtn2 = page.locator('//*[@id="fluentform_8"]/fieldset/div/div[2]/div[3]/div[3]/button[2]');
    }

    async pickFeature(desiredTextsArray) {
        
        const count = await this.featureArray.count();
    
        for (let i = 0; i < count; i++) {
            
            const featureText = await this.featureArray.nth(i).innerText();
    
            if (desiredTextsArray.some(text => featureText.trim().includes(text))) {
                
                await this.featureArray.nth(i).click();
                
            }
        }
    }

    async fillDescription(value){
        this.addDetails.fill(value);

    }

    async featureNext(){
        await this.nextBtn2.click();
    }






}