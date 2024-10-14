const { expect } = require("@playwright/test");

const Locators = {

    AreaAssetPage: {
        
        floor: '#ff_8_floor',
        roomNum:  '#ff_8_room_num',
        parkings: '#ff_8__parking',
        elavator: '#ff_8_elevator_1',
        floors: '#ff_8_floors',
        terraces: '#ff_8_terrace',
        buildArea: '#ff_8_built_mr',
        gardenArea: '#ff_8_garden_mr',
        areaNextBtn: '//*[@id="fluentform_8"]/fieldset/div/div[2]/div[2]/div[5]/button[2]',
        areaPrevBtn: '//*[@id="fluentform_8"]/fieldset/div/div[2]/div[2]/div[5]/button[1]',


    }






}

module.exports = {Locators};