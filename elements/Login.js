class Login{
    username = `-android uiautomator:new UiSelector().text("Username")`
    password = `-android uiautomator:new UiSelector().text("Password")`
    button_save= `-android uiautomator:new UiSelector().description("test-LOGIN")`
    msg_err = `-android uiautomator:new UiSelector().text("Username and password do not match any user in this service.")`
}
module.exports=new Login()