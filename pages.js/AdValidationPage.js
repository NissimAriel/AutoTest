const { expect } = require("@playwright/test");

exports.AddValition = class AddValition{

    constructor(page){
        this.page = page;
        this.myAd = page.locator('[data-elementor-type="jet-listing-items"]').nth(0);
        this.adrres = page.locator('h1.elementor-heading-title.elementor-size-default');
        this.apartStatus = page.locator('h2.elementor-heading-title.elementor-size-default').nth(0);
        this.roomNum = page.locator('h2.elementor-heading-title.elementor-size-default').nth(1);
        this.floor = page.locator('h2.elementor-heading-title.elementor-size-default').nth(2);
        this.floorNum = page.locator('h2.elementor-heading-title.elementor-size-default').nth(3);
        this.price = page.locator('h2.elementor-heading-title.elementor-size-default').nth(4);
        this.propDescription = page.locator('xpath = /html/body/nav/div[1]/div[1]/div/div');
        this.propStatus = page.locator('.elementor-element.elementor-element-3c5b354.e-con-full.e-flex.e-con.e-child'); // status, built, terecces, payment, tax, house tax, parking, garden

    }

    async openMyAd(){
        await this.myAd.click();
    }








}