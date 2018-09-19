// 主程序

// 引入
const server = require('./server');
const router = require('./router');
const requestHandlers = require('./requestHandlers');

// 保存url处理方法
let handle = {};
handle['/'] = requestHandlers.home;
handle['/about'] = requestHandlers.about;
console.log(handle)
server(router, handle);