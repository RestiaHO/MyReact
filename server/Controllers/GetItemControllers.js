//引入用户模块
let GetItemService = require('../Service/GetItemService');
let InputItemService = require('../Service/InputItemService');
// 创建业务对象
let getItemService = new GetItemService();
let inputItemService = new InputItemService();

module.exports.getItem = function (req, res) {
    //验证用户是否合法
    getItemService.getItem(function (ob) {
        res.json(ob);

    });

}

module.exports.getItem2 = function (req, res) {
    //验证用户是否合法
    let name = req.body.name;
    getItemService.getItem2(name,function (ob) {
        res.json(ob);

    });

}

module.exports.getItemById = function (req, res) {
    //验证用户是否合法
    let id = req.body.id;
    getItemService.getItemById(id,function (ob) {
        res.json(ob);

    });

}

module.exports.inputItem = function (req, res) {
    //验证用户是否合法
    let value = req.body.value;
    inputItemService.inputItem(value,function (ob) {
        res.json(ob);
    });
}