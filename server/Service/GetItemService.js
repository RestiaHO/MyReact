let GetItemModel = require('../Models/GetItemModel');

class GetItemService {
    constructor() {
        this.getItemModel = new GetItemModel();
    }
    getItem(callback) {
        this.getItemModel.select(function(ob){
            callback(ob);
        })
    }

    getItem2(name,callback) {
        this.getItemModel.select2(name,function(ob){
            callback(ob);
        })
    }

    getItemById(id,callback) {
        this.getItemModel.select3(id,function(ob){
            callback(ob);
        })
    }
}

module.exports = GetItemService;