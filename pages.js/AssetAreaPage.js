const { expect } = require("@playwright/test");

exports.AssetArea = class AsseArea{

    constructor(page){

        this.page = page;
        this.floor = page.locator('#ff_8_floor'); //not a dropdown
        this.roomNum = page.locator('#ff_8_room_num');
        this.parkings = page.locator('#ff_8__parking');
        this.elavator = page.locator('#ff_8_elevator_1');
        this.floors = page.locator('#ff_8_floors');
        this.terraces = page.locator('#ff_8_terrace');
        this.buildArea = page.locator('#ff_8_built_mr');
        this.gardenArea = page.locator('#ff_8_garden_mr') //not a dropdown
        this.areaNextBtn = page.locator('//*[@id="fluentform_8"]/fieldset/div/div[2]/div[2]/div[5]/button[2]');
        this.areaPrevBtn = page.locator('//*[@id="fluentform_8"]/fieldset/div/div[2]/div[2]/div[5]/button[1]');


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