module.exports = function(name){
   return function(msg){
       var start = Date.now();
       var debug = process.env.DEBUG;
       if(new RegExp(debug).test(name)){
           console.log(name,msg,(Date.now()-start)+'ms');
       }
   }
}