const CartElement = require("../../elements/Cart")
class CartPage{
    get gotoCheckoutInfo(){
        return $(CartElement.gotoCheckoutInfo)
    }
    
}

module.exports = new CartPage()