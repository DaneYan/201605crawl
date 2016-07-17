module.exports = function(name){
   return function(msg){
       var start = Date.now();//读取开始时间
       var debug = process.env.DEBUG;//读取环境变量中的DEBUG值
       if(new RegExp(debug).test(name)){//判断正则是否能匹配名称
           console.log(name,msg,(Date.now()-start)+'ms');//输出最后的结果
       }
   }
}