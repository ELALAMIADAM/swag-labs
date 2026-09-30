const CompleteElement = require("../../elements/Complete")
class CompletePage{
    get msgsuccess(){
        return $(CompleteElement.msgsuccess)
    }
    
}

module.exports = new CompletePage()