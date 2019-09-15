let SqlBase = require("./SqlBase");
class AddItemModel extends SqlBase {
    constructor() {
        super();
    }
    selectByName(name, callback) {
        //编写sql语句
        let sql = `select * from item where name='${name}'`;

        //查询数据
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }

            callback(result);
        });
    }

    insert(name, img, price, description, shop, hot, callback) {
        //1,编写sql语句
        var sql = `INSERT INTO item(name,img, price, description, shop, hot) VALUES('${name}','${img}',${price},'${description}','${shop}','${hot}')`;
        // console.log(sql)
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }
            callback(result);
        });
    }

}
module.exports = AddItemModel;