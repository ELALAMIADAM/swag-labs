const loginElement = require("../../elements/Login")
class LoginPage{
    get username(){
        return $(loginElement.username)
    }
    get password(){
        return $(loginElement.password)
    }
    get ButtonLogin(){
        return $(loginElement.button_save)
    }
}

module.exports = new LoginPage()