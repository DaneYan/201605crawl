var request = require('request');
//负责把GBK编码的BUFFER转成utf8字符串
//因为node.js不支持gbk,所以需要自行解码
var iconvLite = require('iconv-lite');
/**
 * request会把响应体默认转换为utf8编码
 */
request({url:'http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1',encoding:null},function(err,response,body){
    // response是响应对象
    // body 是响应体也就是真实的网页内容
    //如果网页的编码是gbk的话，需要进行自行解码
    //把buffer转成utf8字符串
    body = iconvLite.decode(body,'gbk');
    console.log(body);
})