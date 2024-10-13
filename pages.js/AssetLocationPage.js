const { expect } = require("@playwright/test");

exports.AssetLocation = class AssetLocation{

    constructor(page){

        this.page = page;
        this.assetType = page.locator('#ff_8_asset_type');
        this.assetStatus = page.locator('#ff_8_asset_status');
        this.cityAsset = page.locator('#ff_8_city');
        this.streetAsset = page.locator('#ff_8_street_1');
        this.buildingNum = page.locator('#ff_8_street_number');
        this.locNextBtn = page.locator('button.ff-btn-next[data-action="next"]:nth-of-type(1)');

    }

    async selectType(value){
        await this.page.waitForSelector('#ff_8_asset_type', { state: 'visible' });
        await this.assetType.selectOption(value);
    }

    async selectStatus(value){
        await this.page.waitForSelector('#ff_8_asset_status', { state: 'visible' });
        await this.assetStatus.selectOption(value);
    }

    async selectCity(value){
        await this.page.waitForSelector('#ff_8_city', { state: 'visible' });
        await this.cityAsset.selectOption(value);
    }

    async selectStreet(value){
        await this.page.waitForSelector('#ff_8_street_1', { state: 'visible' });
        await this.streetAsset.selectOption(value);
    }

    async insertBuildingNum(value){
        await this.buildingNum.clear();
        await this.buildingNum.fill(value);
    }

    async nextBtn1(){
        await this.locNextBtn.click();
    }


    
    













}
