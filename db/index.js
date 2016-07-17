var mongoose = require('mongoose');
//连接数据库
mongoose.connect('mongodb://123.57.143.189/201605crawl2');
//定义Movie
exports.Movie = mongoose.model('Movie',new mongoose.Schema({
    name:String, //电影的名称
    url:String,   //电影的URL
    //让电影的分类ID引用分类集合的主键
    cid:{type:mongoose.Schema.Types.ObjectId,ref:'Category'}
}));
//定义分类的Model
exports.Category = mongoose.model('Category',new mongoose.Schema({
    id:String,
    name:String, //电影的名称
    url:String   //电影的URL
}));