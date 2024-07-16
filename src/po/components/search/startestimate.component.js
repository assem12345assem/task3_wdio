const BaseComponent = require("./../common/base.component") ;

class StartEstimateComponent extends BaseComponent{
    constructor() {
        super('.Dk4UPd');
    }

    get estimateBtn() {
        return this.rootEl.$('[jscontroller="O626Fe"]')
    }

}
module.exports = StartEstimateComponent;