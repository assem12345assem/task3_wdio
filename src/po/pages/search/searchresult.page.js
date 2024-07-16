
const BasePage = require("./base.page");
const {SearchItem} = require("../../components");

class SearchResultPage extends BasePage{
    constructor() {
        super('')
    }
    get finding() {
        return new SearchItem()
    }

}

module.exports = SearchResultPage
