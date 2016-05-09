"use strict";
var setup = require("../../client/setup");
var driver;
//TEST_CASE_NAME
var TEST_CASE_NAME_REGISTER_001 = 'REGISTER OLMA, MENULERDE GEZME VE LOGOUT OLMA';
var TEST_CASE_NAME_LOGIN_001    = 'LOGIN OLMA, HATALI LOGIN OLMA, SIFREMI UNUTTUM';

//REGISTER_SCREEN_PATH
var REGISTER_SCREEN_HEADER_BUTTON           = "//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.LinearLayout[1]/android.widget.HorizontalScrollView[1]/android.widget.LinearLayout[1]/android.widget.TextView[2]";
var REGISTER_SCREEN_NAME_TEXTBOX            = "//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.support.v4.view.ViewPager[1]/android.widget.ScrollView[1]/android.widget.LinearLayout[1]/android.widget.LinearLayout[1]/android.widget.EditText[1]";
var REGISTER_SCREEN_PHONE_TEXTBOX           = "//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.support.v4.view.ViewPager[1]/android.widget.ScrollView[1]/android.widget.LinearLayout[1]/android.widget.LinearLayout[2]/android.widget.EditText[1]";
var REGISTER_SCREEN_PASSWORD_TEXTBOX        = "//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.support.v4.view.ViewPager[1]/android.widget.ScrollView[1]/android.widget.LinearLayout[1]/android.widget.LinearLayout[3]/android.widget.EditText[1]";
var REGISTER_SCREEN_RETYPE_PASSWORD_TEXTBOX = "//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.support.v4.view.ViewPager[1]/android.widget.ScrollView[1]/android.widget.LinearLayout[1]/android.widget.LinearLayout[4]/android.widget.EditText[1]";
var REGISTER_SCREEN_REGISTER_BUTTON         = "//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.support.v4.view.ViewPager[1]/android.widget.ScrollView[1]/android.widget.LinearLayout[1]/android.widget.TextView[1]";

//REGISTER_SCREEN_TEST_DATA
var TEST_DATA_RGS_NAME       = 'MERVE KAYA';
var TEST_DATA_RGS_PHONE      = '05378322116';
var TEST_DATA_RGS_PASSWORD   = '123qwe';
var TEST_DATA_RGS_REPASSWORD = '123qwe';

// LOGIN_SCREEN_PATH
var LOGIN_SCREEN_HEADER_BUTTON        = "//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.LinearLayout[1]/android.widget.HorizontalScrollView[1]/android.widget.LinearLayout[1]/android.widget.TextView[1]";
var LOGIN_SCREEN_PHONE_TEXTBOX        = "//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.support.v4.view.ViewPager[1]/android.widget.LinearLayout[1]/android.widget.LinearLayout[1]/android.widget.EditText[1]";
var LOGIN_SCREEN_PASSWORD_TEXTBOX     = "//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.support.v4.view.ViewPager[1]/android.widget.LinearLayout[1]/android.widget.LinearLayout[2]/android.widget.EditText[1]";
var LOGIN_SCREEN_BUTTON               = "//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.support.v4.view.ViewPager[1]/android.widget.LinearLayout[1]/android.widget.TextView[1]";
var LOGIN_SCREEN_FORGET_PASSWORD_LINK = "//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.support.v4.view.ViewPager[1]/android.widget.LinearLayout[1]/android.widget.TextView[2]";

//LOGIN_SCREEN_TEST_DATA
var TEST_DATA_LGN_PHONE    = "05378322112";
var TEST_DATA_LGN_PASSWORD = "123qwe";

//OQ_CODE_SCREEN_PATH
var QR_CODE_SCREEN_OPEN_MENU = "//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.view.View[1]/android.widget.LinearLayout[1]/android.widget.RelativeLayout[1]/android.widget.RelativeLayout[1]/android.widget.TextView[1]";

//MAIN_MENU_NAVBAR_PATH
var MAIN_MENU_SCREEN_NAVBAR_CARDS_TEXT   = "//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.view.View[1]/android.widget.LinearLayout[1]/android.widget.HorizontalScrollView[1]/android.widget.LinearLayout[1]/android.widget.TextView[1]";
var MAIN_MENU_SCREEN_NAVBAR_ACCOUNT_TEXT = "//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.view.View[1]/android.widget.LinearLayout[1]/android.widget.HorizontalScrollView[1]/android.widget.LinearLayout[1]/android.widget.TextView[2]";
var MAIN_MENU_SCREEN_NAVBAR_SHOP_TEXT    = "//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.view.View[1]/android.widget.LinearLayout[1]/android.widget.HorizontalScrollView[1]/android.widget.LinearLayout[1]/android.widget.TextView[3]";
var MAIN_MENU_SCREEN_NAVBAR_HISTORY_TEXT = "//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.view.View[1]/android.widget.LinearLayout[1]/android.widget.HorizontalScrollView[1]/android.widget.LinearLayout[1]/android.widget.TextView[4]";

//ADD_NEW_CARD_PATH
var MAIN_MENU_SCREEN_ADD_NEW_CARD_NAME_SURNAME  = "//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.view.View[1]/android.widget.LinearLayout[1]/android.support.v4.view.ViewPager[1]/android.widget.RelativeLayout[1]/android.widget.RelativeLayout[1]/android.widget.ScrollView[1]/android.widget.LinearLayout[1]/android.widget.LinearLayout[1]";
var MAIN_MENU_SCREEN_ADD_NEW_CARD_NUMBER        = "//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.view.View[1]/android.widget.LinearLayout[1]/android.support.v4.view.ViewPager[1]/android.widget.RelativeLayout[1]/android.widget.RelativeLayout[1]/android.widget.ScrollView[1]/android.widget.LinearLayout[1]/android.widget.LinearLayout[2]";
var MAIN_MENU_SCREEN_ADD_NEW_CARD_MONTH         = "//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.view.View[1]/android.widget.LinearLayout[1]/android.support.v4.view.ViewPager[1]/android.widget.RelativeLayout[1]/android.widget.RelativeLayout[1]/android.widget.ScrollView[1]/android.widget.LinearLayout[1]/android.widget.LinearLayout[3]/android.widget.LinearLayout[1]";
var MAIN_MENU_SCREEN_ADD_NEW_CARD_YEAR          = "//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.view.View[1]/android.widget.LinearLayout[1]/android.support.v4.view.ViewPager[1]/android.widget.RelativeLayout[1]/android.widget.RelativeLayout[1]/android.widget.ScrollView[1]/android.widget.LinearLayout[1]/android.widget.LinearLayout[3]/android.widget.LinearLayout[2]";
var MAIN_MENU_SCREEN_ADD_NEW_CARD_IMAGE_VIA_CAM = "//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.view.View[1]/android.widget.LinearLayout[1]/android.support.v4.view.ViewPager[1]/android.widget.RelativeLayout[1]/android.widget.RelativeLayout[1]/android.widget.ScrollView[1]/android.widget.LinearLayout[1]/android.widget.LinearLayout[4]/android.widget.TextView[1]";
var MAIN_MENU_SCREEN_ADD_NEW_CARD_ADD_BUTTON    = "//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.view.View[1]/android.widget.LinearLayout[1]/android.support.v4.view.ViewPager[1]/android.widget.RelativeLayout[1]/android.widget.RelativeLayout[1]/android.widget.ScrollView[1]/android.widget.LinearLayout[1]/android.widget.TextView[1]";

//TEST_DATA_ADD_NEW_CARDS
var TEST_DATA_ADD_NEW_CARD_NAMESURNAME = 'TEST TEST';
var TEST_DATA_ADD_NEW_CARD_NUMBER      = '4929986711158386';
var TEST_DATA_ADD_NEW_CARD_MONTH       = '05';
var TEST_DATA_ADD_NEW_CARD_YEAR        = '18';

// MAIN_MENU_ACCOUNT_SCREEN
var ACCOUNT_SCREEN_USER_CHANGE_PASSWORD_BUTTON      = "//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.view.View[1]/android.widget.LinearLayout[1]/android.support.v4.view.ViewPager[1]/android.widget.LinearLayout[1]/android.widget.ScrollView[1]/android.widget.LinearLayout[1]/android.widget.TextView[1]";
var ACCOUNT_SCREEN_USER_OLD_PASSWORD_TEXTBOX        = "//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.LinearLayout[2]";
var ACCOUNT_SCREEN_USER_NEW_PASSWORD_TEXTBOX        = "//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.LinearLayout[3]";
var ACCOUNT_SCREEN_USER_RETYPENEW_PASSWORD_TEXTBOX  = "//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.LinearLayout[4]";
var ACCOUNT_SCREEN_USER_CHANGE_PASSWORD_SAVE_BUTTON = "//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.TextView[1]";
var ACCOUNT_SCREEN_LOGOUT_BUTTON                    = "//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.view.View[1]/android.widget.LinearLayout[1]/android.support.v4.view.ViewPager[1]/android.widget.LinearLayout[1]/android.widget.ScrollView[1]/android.widget.LinearLayout[1]/android.widget.TextView[2]";

// TEST_DATA_USER_CHANGE_PASSWORD
var OLD_PASSWORD    = '123qwe';
var NEW_PASSWORD    = 'qweasd';
var RE_NEW_PASSWORD = 'qweasd';

setup.wd.addPromiseChainMethod('swipe', setup.actions.swipe);
describe("run the test cases", function () {
    this.timeout(300000);
    var allPassed = true;
    var completedTests = [];
    before(function () {
      driver = setup.connector;
      return driver;
    });

    after(function () {
        if(!allPassed){
            for(var i in completedTests){
              console.log(completedTests[i].case + "("+ completedTests[i].status +")")
            }
          }
          return driver.quit()
    });

    afterEach(function () {
      completedTests.push({
        case : this.currentTest.title,
        status : this.currentTest.state,
        summary : this.currentTest.parent.title
      });
      return true
    });

    describe(TEST_CASE_NAME_REGISTER_001, function () {
        it ('Login ol', function(){
            console.log('LOGIN OL');
            return true;
            .sleep(1000)
            .elementByXPath(REGISTER_SCREEN_HEADER_TAB_TEXT)
            .click()
            .sleep(500)
            .elementByXPath(REGISTER_SCREEN_NAME_TEXTBOX)
            .click()
            .sendKeys(TEST_DATA_RGS_NAME)
            .hideKeyboard()
            .elementByXPath(REGISTER_SCREEN_PHONE_TEXTBOX)
            .click()
            .sendKeys(TEST_DATA_RGS_PHONE)
            .hideKeyboard()
            .elementByXPath(REGISTER_SCREEN_PASSWORD_TEXTBOX)
            .click()
            .sendKeys(TEST_DATA_RGS_PASSWORD)
            .hideKeyboard()
            .elementByXPath(REGISTER_SCREEN_RETYPE_PASSWORD_TEXTBOX)
            .click()
            .sendKeys(TEST_DATA_RGS_REPASSWORD)
            .hideKeyboard()
            .elementByXPath(REGISTER_SCREEN_REGISTER_BUTTON)
            .click()
            .sleep(3000)
    //      .elementByXPath(REGISTER_SCREEN_OTP_BUTTON)
    //      .click()
    //      .sleep(500)
            .sleep(3000)
            .elementByXPath(QR_CODE_SCREEN_OPEN_MENU)
            .click()
            .sleep(1000)
        });

        it ('Menuyu gez', function(){
          console.log('MENU GEZ');
          return true;
          .elementByXPath(MAIN_MENU_SCREEN_NAVBAR_ACCOUNT_TEXT)
          .click()
          .sleep(1000)
          .elementByXPath(MAIN_MENU_SCREEN_NAVBAR_SHOP_TEXT)
          .click()
          .sleep(1000)
          .elementByXPath(MAIN_MENU_SCREEN_NAVBAR_HISTORY_TEXT)
          .click()
          .sleep(1000)
        });

        it ('Cikis yap', function(){
          console.log('LOGOUT OL');
          return true;
          .elementByXPath(MAIN_MENU_SCREEN_NAVBAR_ACCOUNT_TEXT)
          .click()
          .sleep(1000)
          .elementByXPath(ACCOUNT_SCREEN_LOGOUT_BUTTON)
          .click()
                .sleep(300)
        });
      });

    describe(TEST_CASE_NAME_LOGIN_001, function () {
        it ('LOGIN OLMA', function(){
          .sendKeys(TEST_DATA_LGN_PHONE)
          .hideKeyboard()
          .elementByXPath(LOGIN_SCREEN_PASSWORD_TEXTBOX)
          .click()
          .sendKeys(TEST_DATA_LGN_PASSWORD)
          .hideKeyboard()
          .sleep(3000)
          .elementByXPath(LOGIN_SCREEN_BUTTON)
          .click()
          .sleep(5000)
//OR CODE SCREEN
          .elementByXPath(QR_CODE_SCREEN_OPEN_MENU)
          .click()
          .sleep(2000)
        });
      });

      it ('HATALI LOGIN OLMA', function(){

        });
      });

      it ('SIFREMI UNUTTUM', function(){

        });
      });

    describe("REGISTER 003", function () {
        it ('KULLANICININ KAYIT OLMASI, SIFRE DEGISTIRMESI VE LOGOUT OLMASI', function(){
        return driver
          .sleep(1000)
          .elementByXPath(REGISTER_SCREEN_HEADER_TAB_TEXT)
          .click()
          .sleep(500)
          .elementByXPath(REGISTER_SCREEN_NAME_TEXTBOX)
          .click()
          .sendKeys(TEST_DATA_RGS_NAME)
          .hideKeyboard()
          .elementByXPath(REGISTER_SCREEN_PHONE_TEXTBOX)
          .click()
          .sendKeys(TEST_DATA_RGS_PHONE)
          .hideKeyboard()
          .elementByXPath(REGISTER_SCREEN_PASSWORD_TEXTBOX)
          .click()
          .sendKeys(TEST_DATA_RGS_PASSWORD)
          .hideKeyboard()
          .elementByXPath(REGISTER_SCREEN_RETYPE_PASSWORD_TEXTBOX)
          .click()
          .sendKeys(TEST_DATA_RGS_REPASSWORD)
          .hideKeyboard()
          .elementByXPath(REGISTER_SCREEN_REGISTER_BUTTON)
          .click()
          .sleep(3000)
          //OTP SCREEN
          //      .elementByXPath(REGISTER_SCREEN_OTP_BUTTON)
          //      .click()
          //          .sleep(500)
          .sleep(3000)
          .elementByXPath(QR_CODE_SCREEN_OPEN_MENU)
          .click()
          .sleep(1000)
          //MAIN MENU SCREEN
          .elementByXPath(MAIN_MENU_SCREEN_NAVBAR_ACCOUNT_TEXT)
          .click()
          .sleep(1000)
          .elementByXPath(MAIN_MENU_SCREEN_NAVBAR_SHOP_TEXT)
          .click()
          .sleep(1000)
          .elementByXPath(MAIN_MENU_SCREEN_NAVBAR_HISTORY_TEXT)
          .click()
          .sleep(1000)
      //USER_CHANGE_PASSWORD
          .elementByXPath(MAIN_MENU_SCREEN_NAVBAR_ACCOUNT_TEXT)
          .click()
          .sleep(500)
          .elementByXPath(ACCOUNT_SCREEN_USER_CHANGE_PASSWORD_BUTTON)
          .click()
          .elementByXPath(ACCOUNT_SCREEN_USER_OLD_PASSWORD_TEXTBOX)
          .click()
          .sendKeys(OLD_PASSWORD)
          .hideKeyboard()
          .sleep(300)
          .elementByXPath(ACCOUNT_SCREEN_USER_NEW_PASSWORD_TEXTBOX)
          .click()
          .sendKeys(NEW_PASSWORD)
          .hideKeyboard()
          .sleep(300)
          .elementByXPath(ACCOUNT_SCREEN_USER_RETYPENEW_PASSWORD_TEXTBOX)
          .click()
          .sendKeys(RE_NEW_PASSWORD)
          .hideKeyboard()
          .sleep(300)
          .elementByXPath(ACCOUNT_SCREEN_USER_CHANGE_PASSWORD_SAVE_BUTTON)
          .click()
          .sleep(300)

    //LOGOUT
          .elementByXPath(ACCOUNT_SCREEN_LOGOUT_BUTTON)
          .click()
          .sleep(300)

/*        .sendKeys(TEST_DATA_LGN_PHONE)
          .hideKeyboard()
          .elementByXPath(LOGIN_SCREEN_PASSWORD_TEXTBOX)
          .click()
          .sendKeys(TEST_DATA_LGN_PASSWORD)
          .hideKeyboard()
          .sleep(3000)
          .elementByXPath(LOGIN_SCREEN_BUTTON)
          .click()
          .sleep(5000)
//OR CODE SCREEN
          .elementByXPath(QR_CODE_SCREEN_OPEN_MENU)
          .click()
          .sleep(2000)
//MAIN MENU SCREEN
          .elementByXPath(MAIN_MENU_SCREEN_NAVBAR_ACCOUNT_TEXT)
          .click()
          .sleep(1000)
          .elementByXPath(MAIN_MENU_SCREEN_NAVBAR_SHOP_TEXT)
          .click()
          .sleep(1000)
          .elementByXPath(MAIN_MENU_SCREEN_NAVBAR_HISTORY_TEXT)
          .click()
          .sleep(1000)
          .elementByXPath(MAIN_MENU_SCREEN_NAVBAR_CARDS_TEXT)
          .click()
          .sleep(1000)
    //MAIN MENU ADD NEW CARD
          .elementByXPath(MAIN_MENU_SCREEN_ADD_NEW_CARD_NAME_SURNAME)
          .click()
          .sleep(1000)
          .sendKeys(TEST_DATA_ADD_NEW_CARD_NAMESURNAME)
          .hideKeyboard()
          .sleep(1000)
          .elementByXPath(MAIN_MENU_SCREEN_ADD_NEW_CARD_NUMBER)
          .click()
          .sleep(500)
          .sendKeys(TEST_DATA_ADD_NEW_CARD_NUMBER)
          .hideKeyboard()
          .sleep(500)
          .elementByXPath(MAIN_MENU_SCREEN_ADD_NEW_CARD_YEAR)
          .click()
          .sendKeys(TEST_DATA_ADD_NEW_CARD_YEAR)
          .hideKeyboard()
          .elementByXPath(MAIN_MENU_SCREEN_ADD_NEW_CARD_ADD_BUTTON)
          .click()
          .sleep(1000)

          */
      });
    });

  });
