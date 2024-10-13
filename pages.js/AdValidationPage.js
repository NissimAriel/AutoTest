const { expect } = require("@playwright/test");

exports.AdValidation = class AdValidation{

    constructor(page){
        this.page = page;
        this.address = page.locator('h1.elementor-heading-title.elementor-size-default').nth(0);
        this.apartType = page.locator('h2.elementor-heading-title.elementor-size-default').nth(0);
        this.roomNum = page.locator('h2.elementor-heading-title.elementor-size-default').nth(1);
        this.floorOf = page.locator('h2.elementor-heading-title.elementor-size-default').nth(2);
        this.price = page.locator('h2.elementor-heading-title.elementor-size-default').nth(3);
        this.propDescription = page.locator('.elementor-element.elementor-element-c74417c.elementor-widget.elementor-widget-text-editor');
        this.propStatus = page.locator('xpath=/html/body/div[1]/div[2]/div/div[1]/div/div/div[2]/div[1]/div/ul/li[1]/span[2]');
        this.propArea = page.locator('xpath=/html/body/div[1]/div[2]/div/div[1]/div/div/div[2]/div[1]/div/ul/li[2]/span[2]');
        this.tracces = page.locator('xpath=/html/body/div[1]/div[2]/div/div[1]/div/div/div[2]/div[1]/div/ul/li[3]/span[2]');
        this.payments = page.locator('xpath=/html/body/div[1]/div[2]/div/div[1]/div/div/div[2]/div[1]/div/ul/li[4]/span[2]'); 
        this.tax = page.locator('xpath=/html/body/div[1]/div[2]/div/div[1]/div/div/div[2]/div[2]/div/ul/li[1]/span[2]');
        this.homeCom = page.locator('xpath=/html/body/div[1]/div[2]/div/div[1]/div/div/div[2]/div[2]/div/ul/li[2]/span[2]');
        this.parkings = page.locator('xpath=/html/body/div[1]/div[2]/div/div[1]/div/div/div[2]/div[2]/div/ul/li[3]/span[2]');
        this.garden = page.locator('xpath=/html/body/div[1]/div[2]/div/div[1]/div/div/div[2]/div[2]/div/ul/li[4]/span[2]');
        this.name = page.locator('h5.elementor-heading-title.elementor-size-default').nth(4);
        this.phone = page.locator('h5.elementor-heading-title.elementor-size-default').nth(5);
        this.features = page.locator('.dce-acf-list.dce-acf-list-value');

    }

    async validAddress(value){
        await expect(this.address).toContainText(value);
    }

    async validPrice(value){
        await expect(this.price).toContainText(value);
    }

    async validType(value){
        await expect(this.apartType).toContainText(value);
    }

    async validRooms(value){
        await expect(this.roomNum).toContainText(value);
    }

    async validFloorOf(value){
        await expect(this.floorOf).toContainText(value);
    }

    async validDesc(value){
        await expect(this.propDescription).toContainText(value);
    }

    async valiStatus(value){
        await expect(this.propStatus).toContainText(value);
    }

    async validArea(value){
        await expect(this.propArea).toContainText(value);
    }

    async validTeracces(value){
        await expect(this.tracces).toContainText(value);
    }

    async validPayments(value){
        await expect(this.payments).toContainText(value);
    }

    async validTax(value){
        await expect(this.tax).toContainText(value);
    }

    async validHomeCom(value){
        await expect(this.homeCom).toContainText(value);
    }

    async validParksNum(value){
        await expect(this.parkings).toContainText(value);
    }

    async validGardenArea(value){
        await expect(this.garden).toContainText(value);
    }

    async validFeatures(value){
        await expect(this.features).toContainText(value);
    }

    async validName(value){
        await expect(this.name).toContainText(value);
    }

    async validPhone(value){
        await expect(this.phone).toContainText(value);
    }










}










