const loginpage = require("../pageobjects/LoginPage")
const HomePage = require("../pageobjects/HomePage")
const CartPage = require("../pageobjects/CartPage")
const CheckoutInfoPage = require("../pageobjects/CheckoutInfoPage")
const OverviewPage = require("../pageobjects/OverviewPage")
const CompletePage = require("../pageobjects/CompletePage")

const actions = require("../../common/Actions")
const assertion = require("../../common/Assertions")
const allure = require("@wdio/allure-reporter").default
describe("products parcours",()=>{
    it("parcours achat produit et commander",async()=>{
        await allure.step("click login",async()=>{
            await actions.SetValue(loginpage.username,"standard_user")
            await actions.SetValue(loginpage.password,"secret_sauce")
            await actions.Click(loginpage.ButtonLogin)

            await actions.Click(HomePage.add_to_cart)
            await assertion.assertElementTextEquals(HomePage.cart_counter,"1")
            await assertion.assertElementIsDisplayed(HomePage.remove_btn)
            await actions.Click(HomePage.go_to_cart)

            await actions.Click(CartPage.gotoCheckoutInfo)

            await actions.SetValue(CheckoutInfoPage.firstName,"adam")
            await actions.SetValue(CheckoutInfoPage.LastName,"hmida")
            await actions.SetValue(CheckoutInfoPage.zio,"23132")
            await actions.Click(CheckoutInfoPage.continue_btn)
            await actions.ScrollIntoView(OverviewPage.gotocompelete)
            await actions.Click(OverviewPage.gotocompelete)

            await assertion.assertElementTextEquals(CompletePage.msgsuccess,"THANK YOU FOR YOU ORDER")


        })
    })
})