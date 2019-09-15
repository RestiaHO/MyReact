let AddItemModel = require("../Models/AddItemModel")
class AddItemService {
    constructor() {
        this.addItemModel = new AddItemModel();
    }

    addItem1(name, img, price, description, shop, hot, callback) {
        let ob = {
            msg: "上传失败，有相同商品",
            code: -1
        }
        let that = this;
        this.addItemModel.selectByName(name, function (users) {
            if (users.length < 1) {
                callback(ob);
                ob.msg = "上传成功";
                ob.code = 1;

                that.addItemModel.insert(name, img, price, description, shop, hot, function (callback) {
                    callback(callback)
                })

                return;
            }
            callback(ob);
        })

    }

}
module.exports = AddItemService;