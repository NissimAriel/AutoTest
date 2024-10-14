const { expect } = require("@playwright/test");

const {Locators} = require("../fixtures/Locators")

exports.AssetArea = class AsseArea{

    constructor(page){

        this.page = page;
        this.floor = page.locator(Locators.floor); //not a dropdown
        this.roomNum = page.locator(Locators.roomNum);
        this.parkings = page.locator(Locators.parkings);
        this.elavator = page.locator(Locators.elavator);
        this.floors = page.locator(Locators.floors);
        this.terraces = page.locator(Locators.terraces);
        this.buildArea = page.locator(Locators.buildArea);
        this.gardenArea = page.locator(Locators.gardenArea) //not a dropdown
        this.areaNextBtn = page.locator(Locators.areaNextBtn);
        this.areaPrevBtn = page.locator(Locators.areaPrevBtn);


    }

    async insertFloor(value){
        await this.floor.fill(value);
    }

    async insertRooms(value){
        await this.page.waitForSelector('#ff_8_room_num', { state: 'visible' });
        await this.roomNum.selectOption(value);
    }

    async insertParkings(value){
        await this.page.waitForSelector('#ff_8__parking', { state: 'visible' });
        await this.parkings.selectOption(value);
    }

    async isElavator(value){
        await this.page.waitForSelector('#ff_8_elevator_1', { state: 'visible' });
        await this.elavator.selectOption(value);

    }

    async floorsNum(value){
        await this.floors.clear();
        await this.floors.fill(value);
    }

    async terracesNum(value){
        await this.page.waitForSelector('#ff_8_terrace', { state: 'visible' });
        await this.terraces.selectOption(value);
    }

    async insertBuildArea(value){
        await this.buildArea.clear();
        await this.buildArea.fill(value);
    }

    async insetGadenarea(value){
        await this.gardenArea.fill(value);
    }

    async nextBtn2(){
        await this.areaNextBtn.click();
    }




}