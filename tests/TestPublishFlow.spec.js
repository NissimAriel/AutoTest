// @ts-check
const { test, expect } = require("@playwright/test");
const { RegisterPage } = require("../pages.js/SignupPage");
const { Globals } = require("../pages.js/GlobalsUtils");
const { PersonalPage } = require("../pages.js/PersonalPage");
const { AssetLocation } = require("../pages.js/AssetLocationPage");
const { AssetArea } = require("../pages.js/AssetAreaPage");
const { AssetFeatures } = require("../pages.js/AssetFeaturesPage");
const { AssetPayments } = require("../pages.js/AssetPaymentsPage");
const { AssetPic } = require("../pages.js/AssetPicPage");
const { AssetPersonalDetais } = require("../pages.js/AssetPersonaldetalsPage");
const { Util } = require("../fixtures/Utils");



test.beforeEach(async ({ page }) => {
  const globals = new Globals(page);
  
  await page.goto(Globals.pageURL);
  
  await globals.performLoginActions(Util.User_Details.name, 
    Util.User_Details.password);
  
});

test('Login to system', async ({ page }) => {
 
  const register = new RegisterPage(page);

 //Lonin validation
 await register.validateCorrectPage(); 
 await page.waitForLoadState('networkidle');
 await page.screenshot({ path: 'screenshot0.png', fullPage: true });

});

test.only('Publish add', async ({page}) => {


  const personal = new PersonalPage(page);
  const assetLoc = new AssetLocation(page);
  const assetArea = new AssetArea(page);
  const assetFeatures = new AssetFeatures(page);
  const assetPayments = new AssetPayments(page);
  const assePic = new AssetPic(page);
  const assetPersonalDetais = new AssetPersonalDetais(page);




  // Asset location 

  
  
  await personal.publishButtonClick();
  await assetLoc.selectType(Util.Appartment_Liecing.type);

  await assetLoc.selectStatus(Util.Appartment_Liecing.status);
  await assetLoc.selectCity(Util.Appartment_Liecing.city);
  await assetLoc.selectStreet(Util.Appartment_Liecing.street);
  await assetLoc.insertBuildingNum(Util.Appartment_Liecing.number);
  await assetLoc.nextBtn1();
  
  //Asset area
  await assetArea.insertFloor('0');
  await assetArea.insertRooms("4.5");
  await assetArea.insertParkings("1");
  await assetArea.isElavator("ללא");
  await assetArea.floorsNum("1");
  await assetArea.terracesNum("2");
  await assetArea.insertBuildArea("120");
  await assetArea.insetGadenarea("50");
  await assetArea.nextBtn2();
  
  //Asset features
  await assetFeatures.pickFeature(["מיזוג", "מחסן"]);
  await assetFeatures.fillDescription("Butiful appartment");
  await assetFeatures.featureNext();
  await page.waitForLoadState('networkidle');
  
  //Asset payments
  await assetPayments.pickPrice('7000');
  await assetPayments.pickPaymentNum('10');
  await assetPayments.insertHC('100');
  await assetPayments.insertTaxs('200');
  await assetPayments.selectMonth("November");
  await assetPayments.setDay();
  await assetPayments.nextBtnToPic();
  
  //Uploaling picture
  // await assePic.uploadPicture();
  // await page.pause();

  // //Personal details
  // await assetPersonalDetais.insertName('Nissim Ariel');
  // await assetPersonalDetais.insertPhone('0521234567');
  // await assetPersonalDetais.submitAd();

});