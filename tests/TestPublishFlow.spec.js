// @ts-check
const { test, expect } = require("@playwright/test");
const { Login } = require("../pages.js/LoginPage");
const { Register } = require("../pages.js/SignupPage");
const { PersonalPage } = require("../pages.js/PersonalPage");
const { AssetLocation } = require("../pages.js/AssetLocationPage");
const { AssetArea } = require("../pages.js/AssetAreaPage");
const { AssetFeatures } = require("../pages.js/AssetFeaturesPage");
const { AssetPayments } = require("../pages.js/AssetPaymentsPage");
const { AssetPic } = require("../pages.js/AssetPicPage");
const { AssetPersonalDetais } = require("../pages.js/AssetPersonaldetalsPage");
const { AdValidation } = require("../pages.js/AdValidationPage");
const { Utils } = require("../fixtures/Utils");


test.beforeEach('Login to system', async ({ page }) => {
  
  const login = new Login(page);
  await page.goto(Utils.User_Details.url);
  await login.performLoginActions(Utils.User_Details.name, 
    Utils.User_Details.password);

});
 
test('Test 1 - Validate login', async ({page}) => {

  const register = new Register(page);

 //Lonin validatio
  await page.waitForLoadState('networkidle');
  await register.validateCorrectPage();
  await page.screenshot({ path: 'screenshot0.png', fullPage: true });
 
 
});

test('Test 2 - Publish add', async ({page}) => {
  
  const login = new Login(page);
  const personal = new PersonalPage(page);
  const assetLoc = new AssetLocation(page);
  const assetArea = new AssetArea(page);
  const assetFeatures = new AssetFeatures(page);
  const assetPayments = new AssetPayments(page);
  const assePic = new AssetPic(page);
  const assetPersonalDetais = new AssetPersonalDetais(page);

  // Asset location 

  await login.goToHome();
  await personal.publishButtonClick();
  await assetLoc.selectType(Utils.Appartment_Detalis.type);

  await assetLoc.selectStatus(Utils.Appartment_Detalis.status);
  await assetLoc.selectCity(Utils.Appartment_Detalis.city);
  await assetLoc.selectStreet(Utils.Appartment_Detalis.street);
  await assetLoc.insertBuildingNum(Utils.Appartment_Detalis.number);
  await assetLoc.nextBtn1();
  
  //Asset area
  await assetArea.insertFloor(Utils.Asset_Area.floor);
  await assetArea.insertRooms(Utils.Asset_Area.rooms);
  await assetArea.insertParkings(Utils.Asset_Area.parkings);
  await assetArea.isElavator(Utils.Asset_Area.elavator);
  await assetArea.floorsNum(Utils.Asset_Area.floors);
  await assetArea.terracesNum(Utils.Asset_Area.terraces);
  await assetArea.insertBuildArea(Utils.Asset_Area.area);
  await assetArea.insetGadenarea(Utils.Asset_Area.gardenArea);
  await assetArea.nextBtn2();
  
  //Asset features
  await assetFeatures.pickFeature(page,Utils.Asset_Features.features);
  await assetFeatures.fillDescription(Utils.Asset_Features.description);
  await assetFeatures.featureNext();
  await page.waitForLoadState('networkidle');
  
  //Asset payments
  await assetPayments.pickPrice(Utils.Asset_Payments.price);
  await assetPayments.pickPaymentNum(Utils.Asset_Payments.payments);
  await assetPayments.insertHC(Utils.Asset_Payments.houseCommette);
  await assetPayments.insertTaxes(Utils.Asset_Payments.taxes);
  await assetPayments.selectMonth(Utils.Asset_Payments.month);
  await assetPayments.setDay();
  await assetPayments.nextBtnToPic();
  
  // //Uploaling picture
  await assePic.uploadPicture(Utils.Asset_Picture.path);
  

  // //Personal details
  await assetPersonalDetais.insertName(Utils.Personal_Details.name);
  await assetPersonalDetais.insertPhone(Utils.Personal_Details.phone);
  //await assetPersonalDetais.submitAd();

});

test('Test 3 - Validate Ad', async ({page}) =>{

  const register = new Register(page);
  const validate = new AdValidation(page);
  
  //await register.enterPersonalArea();
  await register.enterFirstAd();
  await validate.validAddress(Utils.Ad_Details.fullAddress);
  await validate.validPrice(Utils.Ad_Details.adPrice);
  await validate.validType(Utils.Appartment_Detalis.type);
  await validate.validRooms(Utils.Asset_Area.rooms);
  await validate.validFloorOf(Utils.Asset_Area.floors);
  await validate.validDesc(Utils.Asset_Features.description);
  await validate.valiStatus(Utils.Ad_Details.stautus);
  await validate.validArea(Utils.Ad_Details.area);
  await validate.validTeracces(Utils.Ad_Details.terraces);
  await validate.validPayments(Utils.Ad_Details.payments);
  await validate.validTax(Utils.Ad_Details.tax);
  await validate.validHomeCom(Utils.Ad_Details.homeCommetee);
  await validate.validParksNum(Utils.Ad_Details.park);
  await validate.validGardenArea(Utils.Ad_Details.garden);
  await validate.validFeatures(Utils.Asset_Features.features);
  await validate.validName(Utils.Personal_Details.name);
  await validate.validPhone(Utils.Personal_Details.phone);
  

});