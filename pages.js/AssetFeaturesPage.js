const { expect } = require("@playwright/test");

exports.AssetFeatures = class AssetFeatures{

    constructor(page){
        this.page = page;
        //this.featureArray = page.locator('.ff-el-image-input-src');
        this.addDetails = page.locator('#ff_8_asset_description');
        this.nextBtn2 = page.locator('//*[@id="fluentform_8"]/fieldset/div/div[2]/div[3]/div[3]/button[2]');
    }

    async pickFeature(page, labelText) {
        const checkboxLabel = await page.locator(`xpath=//label[contains(@aria-label, '${labelText}')]`);
        if (await checkboxLabel.count() > 0) {
            await checkboxLabel.click(); // Clicks on the label to check the box
        }        
    }

    async fillDescription(value){
        this.addDetails.fill(value);

    }

    async featureNext(){
        await this.nextBtn2.click();
    }






}