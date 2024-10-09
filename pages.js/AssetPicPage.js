const { expect } = require("@playwright/test");

exports.AssetPic = class AssetPic{

    constructor(page){
        this.page = page;
        this.picPath = 'Macintosh HD/Users/nissimariel/Desktop/house.png';
        this.uploadBtn = page.locator('.ff_upload_btn.ff-btn');
        this.nxtToPDetails = page.locator('.ff-float-right.ff-btn.ff-btn-next.ff-btn-secondary').nth(4);
    }


    async uploadPicture(){

        await this.uploadBtn.setInputFiles("/Users/nissimariel/Desktop/house.png");
        await this.nxtToPDetails.click();

    }


}