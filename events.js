const http = require('http');
const events = require("events");
const server = http.createServer();

const host =  '127.0.0.1'
const port = 8080


// server.on('request', function(req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.write('shiyanlou,111');
//     console.log('shiyanlou,111');
// });

server.on('request', function(req, res) {
    res.write('\nshiyanlou,222');
    console.log('shiyanlou,222');
    res.end();
})

// 执行一次监听
// server.once('request', callback)

// // 移除绑定的监听器callback
// server.removeListener('request', callback);

// // 移除所有request监听事件
// server.removeAllListeners("request")

// // 绑定自定义事件myevent
// server.on('myevent', function(arg) {
//     console.log(arg);
// });
// 触发自定义事件
// server.emit('myevent', '自定义');

// 查看监听器的个数
let num = events.EventEmitter.listenerCount(server, 'request');
console.log(num)
server.listen(port, host); // 在127.0.0.1(即本地回环)8000端口监听http请求
console.log(`Server running at http://${host}:${port}/`);

