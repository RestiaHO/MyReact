var express = require('express');
//2，获得express对象
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.all('*',function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (req.method == 'OPTIONS') {
      res.sendStatus(200);
    }
    else {
      next();
    }
  });
  

let getItemControllers=require("./Controllers/GetItemControllers");
app.get('/getItem',getItemControllers.getItem);
app.post('/getItem2',getItemControllers.getItem2);
app.post('/getItemById',getItemControllers.getItemById);
app.post('/inputItem',getItemControllers.inputItem)

app.listen(1551, function () {
    console.log('启动');
});