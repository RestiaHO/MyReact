let SqlBase = require('./SqlBase');
class GetItemModel extends SqlBase {
    constructor() {
        super();
    }
    select(callback) {
        //编写sql语句
        let sql = "select * from item";

        //查询数据
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }
            callback(result);
        });
    }

    select2(name,callback) {
        //编写sql语句
        let sql = `select * from item where name = '${name}' `;

        //查询数据
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }
            callback(result);
        });
    }

    select3(id,callback) {
        //编写sql语句
        let sql = `select * from item where id = '${id}' `;

        //查询数据
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }
            callback(result);
        });
    }
}

module.exports = GetItemModel;