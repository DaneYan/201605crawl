var async = require('async');
var read = require('./read');
var save = require('./save');
var debug = require('debug')('crawl:main');
var movies = [];
var url = 'http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1';
debug('开始执行任务');
async.series([
    function(callback){
        //把读到的电影列表赋给movies
        read(url,function(err,items){
            movies = items;
            callback();
        });
    },
    function(callback){
        save(movies,callback);
    }
],function(err,result){
    console.log(result);
    debug('结束执行任务');
})
