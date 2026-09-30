const HomeElement = require("../../elements/Home")
class HomePage{
    get add_to_cart(){
        return $(HomeElement.add_to_cart)
    }
    get go_to_cart(){
        return $(HomeElement.go_to_cart)
    }
    get cart_counter(){
        return $(HomeElement.cart_counter)
    }
    get remove_btn(){
        return $(HomeElement.remove_btn)
    }
}

module.exports = new HomePage()