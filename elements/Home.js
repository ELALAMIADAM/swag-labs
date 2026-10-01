class Home{
    add_to_cart = `-android uiautomator:new UiSelector().text("ADD TO CART").instance(0)`
    go_to_cart = `-android uiautomator:new UiSelector().className("android.widget.ImageView").instance(3)`
    cart_counter = `-android uiautomator:new UiSelector().text("1")`
    remove_btn = `-android uiautomator:new UiSelector().text("REMOVE")`
    home_title = `-android uiautomator:new UiSelector().text("PRODUCTS")`
}
module.exports=new Home()