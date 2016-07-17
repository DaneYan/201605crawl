var CronJob = require('cron').CronJob;
//秒 分钟 小时 日期 月份 星期
/**
 *  * 每秒执行一次
 *  1,5,9 第1 5 9 秒
 *  1-10 第1秒到第10秒每秒执行一次
 *  / 每多少秒执行一次
 */
var task = new CronJob('* 53 * * * *',function(){
    console.log('执行日志',new Date().toLocaleString());
});
task.start();
