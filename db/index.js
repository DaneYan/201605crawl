var mongoose = require('mongoose');
//连接数据库
mongoose.connect('mongodb://123.57.143.189/201605crawl');
//定义shema
exports.Movie = mongoose.model('Movie',new mongoose.Schema({
    name:String, //电影的名称
    url:String   //电影的URL
}));