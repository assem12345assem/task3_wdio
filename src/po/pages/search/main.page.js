// const {AddDoctorModal, DoctorListHeader, SpecialistCard} = require("./../components");

const BasePage = require("./base.page");
const {SearchItem} = require("../components");

class MainPage extends BasePage{
    constructor() {
        super('/')
    }

}

module.exports = MainPage