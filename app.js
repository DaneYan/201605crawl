/**
 建一个服务器，展示电影的分类和电影列表
 */
var express = require('express');
var app = express();
app.set('view engine','jade');
app.set('views','views');

app.get('/',function(req,res){
    res.render('index');
});
app.listen(9090);