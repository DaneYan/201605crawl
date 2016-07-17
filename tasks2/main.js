var async = require('async');
var read = require('./read');
var save = require('./save');
var debug = require('debug')('crawl:main');
var db = require('../db');
var movies = [];
//分类列表的URL
var url = 'http://top.baidu.com/category?c=1&fr=topindex';
debug('开始执行任务');
/**
 * 1. 读取电影的分类列表
 * 2. 保存分类列表
 *
 * 3. 根据分类列表读取电影列表
 * 4. 保存电影列表
 */
var categories = [];
async.series([
    //读取电影分类的列表
    function (callback) {
        debug('读取电影的分类列表开始');
        read.category(url, function (err, items) {
            categories = items;
            debug('读取电影的分类列表结束');
            callback();
        })
    },
    //保存电影的分类
    function(callback){
        debug('保存电影的分类列表');
        save.category(categories,function(){
            db.Category.find({},function(err,docs){
                categories = docs;
                callback();
            });
        })
    },

    function (callback) {
        //读取电影列表并把电影信息赋给 movies
        debug('读取电影的列表');
        async.forEach(categories,function(category,cb){
            read.movie(category.url,category._id,function (err, items) {
                movies = movies.concat(items);
                cb();
            });
        },callback)
    },
    function (callback) {
        debug('保存电影的列表');
        save.movie(movies, callback);
    }
], function (err, result) {
    debug('结束执行任务');
})
