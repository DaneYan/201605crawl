var cheerio = require('cheerio');
//加载html字符串
var $ = cheerio.load('<ul><li><a href="/node.js">node.js</a></li><li><a href="/javascript">javascript</a></li></ul>');
$('ul li a').each(function(){
    var $me = $(this);
    console.log($me.text(),$me.attr('href'));
});

