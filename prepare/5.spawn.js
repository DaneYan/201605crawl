var spawn = require('child_process').spawn;
var fs = require('fs');
function download(url){
    //1. 先得到文件名
    var filename = url.split('/').pop();
    //2. 创建一个可写流
    var ws = fs.createWriteStream('./'+filename);
    //3. 执行可执行文件 返回一个子进程的实例
    var child = spawn('curl',[url]);
    //4.监听子进程的向控制台的标准输出，得到数据的时候写入文件流中
    child.stdout.on('data',function(data){
        ws.write(data);
    });
    // 5. 监听标准输出完毕
    child.stdout.on('end',function(){
        ws.end();
        console.log('文件保存完毕');
    });
    // 6.监控子进程的退出事件
    child.on('exit',function(code){
        console.log(code);
    });
}


//把此文件下载下来并保存在当前目录中，文件名保持不变
download('https://www.baidu.com/img/bd_logo1.png');