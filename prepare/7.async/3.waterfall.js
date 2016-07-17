var async = require('async');
//任务还是串行依次执行，但上一个参数的输出会变成一个参数的输入
async.waterfall([
    function(callback){
        setTimeout(function(){
            callback(null,'水');
        },1000)
    },
    function(data,callback){
        setTimeout(function(){
            callback(null,data+'+咖啡');
        },1000)
    }
],function(err,result){
    console.log(err);
    console.log(result);
})