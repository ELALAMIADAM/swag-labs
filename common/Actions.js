
class Actions {
    async Click(element){
        await element.waitForDisplayed({timeout:120000})
        await element.click()
    }
    async SetValue(element, value){
        await element.waitForDisplayed({timeout:120000})
        await element.clearValue()
        await element.setValue(value)
    }
    async ScrollIntoView(element){
        await element.scrollIntoView()
    }
}
module.exports = new Actions()