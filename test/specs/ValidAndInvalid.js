const loginpage = require("../pageobjects/LoginPage")
const HomePage = require("../pageobjects/HomePage")
const data = require('../data/jdd.json');
/** @type {import('webdriverio').Browser} */
const browser = global.browser;

const actions = require("../../common/Actions")
const assertion = require("../../common/Assertions");
const allure = require("@wdio/allure-reporter").default
describe("products parcoursnnn",()=>{

    data.forEach(({ username, password, result }) => {

        afterEach(async () => {
            await browser.reloadSession();
        });
        
        
        
        // // Other method 
        // beforeEach("activateapp",async()=>{
        //     await driver.activateApp("com.swaglabsmobileapp")
        // })
        // afterEach("terminateapp",async ()=>{
        //     await driver.terminateApp("com.swaglabsmobileapp")
        // })
        it("parcours achat produit et commander", async () => {
            await allure.step("click login", async () => {
                await actions.SetValue(loginpage.username, username)
                await actions.SetValue(loginpage.password, password)
                await actions.Click(loginpage.ButtonLogin)

                if (result) {
                    await assertion.assertElementIsDisplayed(HomePage.hometitle)

                } else {
                    await assertion.assertElementTextEquals(loginpage.MsgError, "Username and password do not match any user in this service.")
                    
                }
                
            })
        })
    })
})