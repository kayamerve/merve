"use strict";
var setup = require("../../client/setup");
var driver;
setup.wd.addPromiseChainMethod('swipe', setup.actions.swipe);
describe(setup.deviceOS + " test cases", function () {
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

    describe("before", function(){
      before(function(){
        console.log("\n\n\n****************/////----HOOK----/////****************\n\n\n");
      });
    });


    describe("Kullanıcının login olma akışları", function () {
      it('Kullanici adi ve sifrenin girilmesi', function(){
          return driver
          .sleep(3000)
          .elementByXPath('//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.support.v4.view.ViewPager[1]/android.widget.LinearLayout[1]/android.widget.LinearLayout[1]/android.widget.EditText[1]')
          .click()
          .sendKeys("05337635314")
          .elementByXPath('//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.support.v4.view.ViewPager[1]/android.widget.LinearLayout[1]/android.widget.LinearLayout[2]/android.widget.EditText[1]')
          .click()
          .then(function(element){
            return clearVal(driver.elementByXPath('//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.support.v4.view.ViewPager[1]/android.widget.LinearLayout[1]/android.widget.LinearLayout[2]/android.widget.EditText[1]'))
          })
          .elementByXPath('//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.support.v4.view.ViewPager[1]/android.widget.LinearLayout[1]/android.widget.LinearLayout[2]/android.widget.EditText[1]')
          .sendKeys("qweqwe")
          .hideKeyboard()
          .elementByXPath('//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.support.v4.view.ViewPager[1]/android.widget.LinearLayout[1]/android.widget.TextView[1]')
          .click()
          .sleep(7000)
        // Login olduktan sonra gelen ekran ve akis
        //  .elementByXPath('//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.view.View[1]/android.widget.LinearLayout[1]/android.widget.RelativeLayout[1]/android.widget.RelativeLayout[1]/android.widget.TextView[1]')
        //  .click()
        //  .sleep(5000)
        //  .elementByXPath('//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.view.View[1]/android.widget.LinearLayout[1]/android.support.v4.view.ViewPager[1]/android.widget.RelativeLayout[1]/android.widget.RelativeLayout[1]')
        //  .click()
       //   .sleep(3000)
      });
    });
    describe("Kullanıcının login olma akışlari", function () {
      it('Kullanici sifresinin yanlis giriliyor olmasi', function(){
          return driver
          .sleep(3000)
          .elementByXPath('//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.support.v4.view.ViewPager[1]/android.widget.LinearLayout[1]/android.widget.LinearLayout[1]/android.widget.EditText[1]')
          .click()
          .sendKeys("05337635314")
          .elementByXPath('//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.support.v4.view.ViewPager[1]/android.widget.LinearLayout[1]/android.widget.LinearLayout[2]/android.widget.EditText[1]')
          .click()
          .then(function(element){
            return clearVal(driver.elementByXPath('//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.support.v4.view.ViewPager[1]/android.widget.LinearLayout[1]/android.widget.LinearLayout[2]/android.widget.EditText[1]'))
          })
          .elementByXPath('//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.support.v4.view.ViewPager[1]/android.widget.LinearLayout[1]/android.widget.LinearLayout[2]/android.widget.EditText[1]')
          .sendKeys("qweqww")
          .hideKeyboard()
          
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
