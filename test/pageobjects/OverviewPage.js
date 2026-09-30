const OverviewElement = require("../../elements/Overview")
class OverviewPage{
    get gotocompelete(){
        return $(OverviewElement.gotocompelete)
    }
    
}

module.exports = new OverviewPage()