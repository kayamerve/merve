"use strict";
var setup = require("../../client/setup");
var driver;

var FIRST_SCREEN = "//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.support.v4.view.ViewPager[1]/android.widget.RelativeLayout[1]/android.widget.FrameLayout[1]/android.view.View[1]";
var LOGIN_BUTTON = "//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.support.v4.view.ViewPager[1]/android.widget.RelativeLayout[1]/android.widget.RelativeLayout[1]/android.widget.LinearLayout[1]/android.widget.ImageView[1]";
var PHONE_NUMBER_TEXTBOX = "//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.webkit.WebView[1]/android.webkit.WebView[1]/android.view.View[5]/android.view.View[1]/android.widget.EditText[1]";
var PHONE_NUMBER = '5378312112';
var NEXT_BUTTON = "//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.webkit.WebView[1]/android.webkit.WebView[1]/android.view.View[5]/android.view.View[2]";
var VALIDATION_CODE_TEXTBOX = "//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.webkit.WebView[1]/android.webkit.WebView[1]/android.view.View[6]/android.view.View[1]/android.widget.EditText[2]";
var VALIDATION_CODE = '123456';
var VALIDATION_NEXT_BUTTON = "//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.webkit.WebView[1]/android.webkit.WebView[1]/android.view.View[6]/android.view.View[2]";
var EMAIL_TEXTBOX = "//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.webkit.WebView[1]/android.webkit.WebView[1]/android.view.View[5]/android.view.View[1]/android.widget.EditText[1]";
var EMAIL_NEXT_BUTTON = "//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.webkit.WebView[1]/android.webkit.WebView[1]/android.view.View[5]/android.view.View[2]";
var EMAIL = 'abc@hotmail.com';
var EMAIL_CHECK = "//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.webkit.WebView[1]/android.webkit.WebView[1]/android.view.View[5]/android.view.View[3]/android.view.View[1]";
var APP_NEXT_BUTTON = "//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.webkit.WebView[1]/android.webkit.WebView[1]/android.view.View[5]/android.view.View[3]";
var APP_NEXT_BUTTON_POPUP = "//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.webkit.WebView[1]/android.webkit.WebView[1]/android.view.View[3]";
var APP_NEXT_BUTTON_POPUP2 = "//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.webkit.WebView[1]/android.webkit.WebView[1]/android.view.View[3]";
var NEXT_BUTTON_NETWORKSPAGE = "//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.webkit.WebView[1]/android.webkit.WebView[1]/android.view.View[5]/android.view.View[7]";
var FACEBOOK_POPUP_NEXT_BUTTON = "//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.webkit.WebView[1]/android.webkit.WebView[1]/android.view.View[6]";
var EMAIL_VALIDATION_POPUP_BUTTON = "//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.webkit.WebView[1]/android.webkit.WebView[1]/android.view.View[3]";


var LOGIN_SCREEN_BUTTON = "";
var LOGIN_SCREEN_USERNAME_TEXTBOX = "//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.webkit.WebView[1]/android.webkit.WebView[1]/android.widget.EditText[1]";
var TEST_DATA_USERNAME = 'Merve';
var LOGIN_SCREEN_PASSWORD_TEXTBOX = "//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.webkit.WebView[1]/android.webkit.WebView[1]/android.widget.EditText[2]";
var TEST_DATA_PASSWORD = '123456';


var LOGIN_SCREEN_NEXT_BUTTON = "//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.webkit.WebView[1]/android.webkit.WebView[1]/android.view.View[7]";
var LOGIN_SCREEN_BACK_BUTTON = "//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.webkit.WebView[1]/android.webkit.WebView[1]/android.view.View[2]/android.widget.Image[1]";
var LOGIN_SCREEN_MONEY_TRANSFER_BUTTON = "//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.webkit.WebView[1]/android.webkit.WebView[1]/android.view.View[4]";
var LOGIN_SCREEN_MONEY_TRANS_POPUP_BACK_BUTTON = "//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.webkit.WebView[1]/android.webkit.WebView[1]/android.view.View[2]/android.view.View[4]/android.view.View[2]";
var LOGIN_SCREEN_MONEY_TRANS_MEDIA_BUTTON = "//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.webkit.WebView[1]/android.webkit.WebView[1]/android.widget.Image[1]";
var LOGIN_SCREEN_MONEY_TRANS_MEDIA_FACEBOOK = "//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.webkit.WebView[1]/android.webkit.WebView[1]/android.view.View[4]/android.view.View[1]";
var LOGIN_SCREEN_MONEY_TRANS_MEDIA_FACEBOOK_BACK_BUTTON = "//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.webkit.WebView[1]/android.webkit.WebView[1]/android.view.View[2]/android.widget.Button[1]";
var LOGIN_SCREEN_MONEY_TRANS_MEDIA_FACEBOOK_BACK_POPUP = "//android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.LinearLayout[2]/android.widget.Button[1]";
var HOME_YIPU_CAMPANY = "//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.webkit.WebView[1]/android.webkit.WebView[1]/android.view.View[5]";
var HOME_YIPU_CAMPANY_BUTTON = "//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.webkit.WebView[1]/android.webkit.WebView[1]/android.view.View[4]/android.view.View[1]";
var HOME_CHAT_SCREEN_BUTTON = "//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.webkit.WebView[1]/android.webkit.WebView[1]/android.view.View[6]";
var CHAT_SCREEN_BACK_BUTTON = "//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.webkit.WebView[1]/android.webkit.WebView[1]/android.view.View[2]";
var HOME_HELP = "//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.webkit.WebView[1]/android.webkit.WebView[1]/android.view.View[7]";
var HELP_BACK = "//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.webkit.WebView[1]/android.webkit.WebView[1]/android.view.View[2]";
var HELP_BUTTON_INPUT = "//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.webkit.WebView[1]/android.webkit.WebView[1]/android.view.View[4]/android.view.View[1]";
var HELP_BUTTON_BACK = "//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.webkit.WebView[1]/android.webkit.WebView[1]/android.view.View[2]";
setup.wd.addPromiseChainMethod('swipe', setup.actions.swipe);
describe(setup.deviceOS + " test cases", function () {
    this.timeout(300000);
    var allPassed = true;
    var completedTests = [];
    before(function () {
      driver = setup.connector;

      return true
    });

    describe("before", function(){
      before(function(){
        console.log("\n\n\n****************/////----HOOK----/////****************\n\n\n");
      });
    });

      describe("POC_Tanitim videosu gecis ve login olma akisi", function () {
        it ('poc login akisi ', function(){
        return driver
//BASTAN SONA DOGRU CALISAN LOGIN ADIMI
//Tanitim videosuna tiklama
    //    .elementByXPath(FIRST_SCREEN)
    //    .click()
//Giris Butonu tiklama
    //    .elementByXPath(LOGIN_BUTTON)
    //    .click()
    //    .sleep(12000)
    //    .elementByXPath(PHONE_NUMBER_TEXTBOX)
    //    .click()
    //    .sendKeys('5')

      //  .hideKeyboard()
      //  .sleep()
//Devan butonu
  //      .elementByXPath(NEXT_BUTTON)
  //      .click()
  //      .sleep()
//Dogrulama sifresi gelen ekran sifre TextView
  //      .elementByXPath(VALIDATION_CODE_TEXTBOX)
  //      .click()
  //      .sendKeys(VALIDATION_CODE)
  //      .hideKeyboard()
// Devam butonuna tiklanir
  //      .elementByXPath(VALIDATION_NEXT_BUTTON)
  //      .click()
    //    .sleep()
//Email texti, sozlesme onaylanmasi ve devam butonu
    //    .elementByXPath(EMAIL_TEXTBOX)
    //    .click()
    //    .sendKeys(EMAIL)
    //    .hideKeyboard()
    //    .elementByXPath(EMAIL_CHECK)
    //    .click()
    //    .elementByXPath(EMAIL_NEXT_BUTTON)
    //    .click()
  //  email popup tamam butonu
    //    .elementByXPath(APP_NEXT_BUTTON_POPUP)
    //    .click()
    //    .elementByXPath(APP_NEXT_BUTTON)
    //    .click()
    //    .elementByXPath(APP_NEXT_BUTTON_POPUP2)
    //    .click()
    //    .elementByXPath(NEXT_BUTTON_NETWORKSPAGE)
    //    .click()
    //    .elementByXPath(FACEBOOK_POPUP_NEXT_BUTTON)
    //    .click()
    //    .elementByXPath(EMAIL_VALIDATION_POPUP_BUTTON)
    //    .click()
    // chat ekrani
        .sleep(55000)
        .elementByXPath(HOME_CHAT_SCREEN_BUTTON)
        .click()
        .sleep(2000)
    // chat geri butonu
        .elementByXPath(CHAT_SCREEN_BACK)
        .click()
        .sleep(5000)
    // destek ol
        .elementByXPath(HOME_HELP_BUTTON)
        .click()
        .sleep(5000)
        .elementByXPath(HELP_BUTTON)
        .click()
        .sleep(5000)
        .elementByXPath(HELP_BUTTON_BACK)
        .click()
        .sleep(5000)
        .elementByXPath(HELP_BACK)
        .click()




    //    .elementByXPath(LOGIN_SCREEN_PASSWORD_TEXTBOX)
    //    .click()
    //    .sendKeys(PASSWORD)
    //    .hideKeyboard()
    //    .elementByXPath(LOGIN_SCREEN_BACK_BUTTON)
    //    .click()
    //Para Gonder

      });
  });
});
function clearVal(element, input){
  if(!input){
    input = "111111111111";
  }

  for(var i = 0;i< input.length; i++){
    element.deviceKeyEvent(67);
  }
  return element.deviceKeyEvent(67);
}
