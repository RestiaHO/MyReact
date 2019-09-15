class SqlBase {
    constructor() {
        let mysql = require('mysql'); //调用MySQL模块

        //1，创建一个connection
        this.connection = mysql.createConnection({
            host: 'rm-wz9vq89u188eq3132mo.mysql.rds.aliyuncs.com', //主机 ip
            user: 'root', //MySQL认证用户名
            password: 'Mxd108487', //MySQL认证用户密码
            port: '3306', //端口号
            database: 'react_solo' //数据库里面的数据
        });
        //2,连接
        this.connection.connect();
    }


    end() {
        this.connection.end();
    }


}

module.exports = SqlBase;