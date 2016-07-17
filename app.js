/**
 建一个服务器，展示电影的分类和电影列表
 */
var express = require('express');
var app = express();
app.set('view engine','jade');
app.set('views','views');
var async = require('async');
var db = require('./db');
app.get('/:cid',function(req,res){
    var cid = req.params.cid;
    async.parallel([
        function(cb){//读取所有的分类列表
            db.Category.find({},cb)
        },
        function(cb){//读取所有的电影
            db.Movie.find({cid:cid},cb);
        }
    ],function(err,result){
        console.log(result);
        // err 错误对象 result 结果[] 分别对应上面任务函数每个输出的结果
        res.render('index',{cid:cid,categories:result[0],movies:result[1]});
        //渲染模板 传入模板对象   分类列表             第一个分类下面的电影列表
    })
});
app.get('/',function(req,res){
    var categories = [];//分类的数组
    async.series([
        function(cb){//读取所有的分类列表
            db.Category.find({},function(err,docs){
                categories = docs;
                cb(err,docs);
            })
        },
        function(cb){//读取所有的电影
            db.Movie.find({cid:categories[0]._id},cb);
            // cb(err,docs)
        }
    ],function(err,result){
        console.log(result);
        // err 错误对象 result 结果[] 分别对应上面任务函数每个输出的结果
        res.render('index',{categories:result[0],movies:result[1]});
        //渲染模板 传入模板对象   分类列表             第一个分类下面的电影列表
    })

});
app.listen(9090);

var CronJob = new require('cron').CronJob;
var job = new CronJob('0 */5 * * * * ',function(){
    var spawn = require('child_process').spawn;
    // node.exe 的绝对路径  node tasks2/main.js
    var child = spawn(process.execPath,['tasks2/main.js']);
});
job.start();