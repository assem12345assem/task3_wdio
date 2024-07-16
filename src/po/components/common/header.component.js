const BaseComponent = require("./base.component");

class HeaderComponent extends BaseComponent {
    constructor() {
        super('.TDbJKc')
    }

    get searchBtn() {
        return this.rootEl.$('.p1o4Hf')
    }
    get searchInput() {
        return this.rootEl.$('[placeholder="Search"]')
    }
}
module.exports = HeaderComponent