//引入用户模块
let AddItemService = require('../Service/AddItemService');
// 创建业务对象
let addItemService = new AddItemService();
module.exports.addItem = function (req, res) {
    console.log('xxx1');
    //解析提交数据
    let name = req.body.name;
    let img = req.body.img;
    let price = req.body.price;
    let description = req.body.description;
    let shop = req.body.shop;
    let hot = req.body.hot;
    // console.log(name,passwd);
    
    //验证用户是否合法
    addItemService.addItem1(name,img, price, description, shop, hot, function (ob) {
        //如果用户合法
        if (ob.code == 1) {
            res.send("yes")
        }
    });

}