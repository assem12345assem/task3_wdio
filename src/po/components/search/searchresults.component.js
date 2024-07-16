const BaseComponent = require("./../common/base.component");

class SearchResultsComponent extends BaseComponent{
    constructor() {
        super('.H8asR');
    }

    get calculator() {
        return this.rootEl.$('a[href="https://cloud.google.com/products/calculator"]')
    }
    get search_widget() {
        return this.rootEl.$('form[data-value="Google Cloud Platform Pricing Calculator"]')
    }
}

module.exports = SearchResultsComponent;