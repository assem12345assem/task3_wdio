
const BasePage = require("./base.page");
const { Estimate} = require("../../components");

class StartEstimatePage extends BasePage{
    constructor() {
        super('')
    }

    get start() {
        return new Estimate()
    }

}

module.exports = StartEstimatePage
