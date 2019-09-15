let InputItemModel = require('../Models/InputItemModel');

class InputItemService {
    constructor() {
        this.inputItemModel = new InputItemModel();
    }
    inputItem(value, callback) {
        this.inputItemModel.select(value, function (ob) {
            callback(ob);
        })
    }
}

module.exports = InputItemService;