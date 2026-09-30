class Login{
    username = `-android uiautomator:new UiSelector().text("Username")`
    password = `-android uiautomator:new UiSelector().text("Password")`
    button_save= `-android uiautomator:new UiSelector().description("test-LOGIN")`
    
}
module.exports=new Login()