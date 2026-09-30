const CheckoutInfoElement = require("../../elements/CheckoutInfo")
class CheckoutInfoPage{
    get firstName(){
        return $(CheckoutInfoElement.firstName)
    }
    get LastName(){
        return $(CheckoutInfoElement.LastName)
    }
    get zio(){
        return $(CheckoutInfoElement.zio)
    }
    get continue_btn(){
        return $(CheckoutInfoElement.continue_btn)
    }
}

module.exports = new CheckoutInfoPage()