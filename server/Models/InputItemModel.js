let SqlBase = require('./SqlBase');
class InputItemModel extends SqlBase {
    constructor() {
        super();
    }
    select(value,callback) {
        //编写sql语句
        let sql = `SELECT * FROM item WHERE name LIKE '${value}%' or Attr LIKE '${value}%'`;

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

module.exports = InputItemModel;