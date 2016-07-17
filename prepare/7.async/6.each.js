var async = require('async');
var obj = {name:'zfpx',age:8};
console.time('cost');
async.eachOfSeries(obj,function(value,key,callback){
    setTimeout(function(){
        console.log(key+'='+value);
        callback();
    },3000);
},function(){
    console.timeEnd('cost');
})