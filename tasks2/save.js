var db = require('../db');
var async = require('async');
var debug = require('debug')('crawl:save');
/**
 *  负责把电影列表保存到数据库中 mongodb
 */
module.exports = function(items,callback){
    debug('开始保存电影列表')
    async.series([
        //删除整个集合
        function(callback){
            db.Movie.remove({},callback);
            debug('电影列表删除完毕');
        },
        //所有的电影保存到数据库中
        function(callback){
            //循环数组中每个元素，把它们依次保存到数据库中
            async.forEach(items,function(item,cb){
                db.Movie.create(item,cb);
                debug('保存电影:'+item.name);
            },callback)
        }
    ],function(err,result){
        debug('保存电影完毕');
    })
}
/*
module.exports([{name:'大鱼',url:'海棠'},{name:'摇滚',url:'藏獒'}]);*/
