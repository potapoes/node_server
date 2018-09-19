// 创建http server

const http = require('http');
const url = require('url');
// const fs = require('fs');

const host = '127.0.0.1';
const port = 8080;

// 创建http server
const start = (router, handle)=>{
    // 参数
    // router 判断url是否存在， 存在则调用handle处理，不存在也返回404
    // handle 处理不同的url请求
    
    // 处理request请求
    const onRequest = (req, res)=>{
        // 使用url.parse()方法解析url
        // 它会把url string转化为一个object
        // 这样我们就可以很方便的获取url中的host、port、pathname等值了
        let pathname = url.parse(req.url).pathname
        console.log(`Request for ${pathname} received`);

        // 判断并处理不同url请求
        router(handle, pathname, res, req)
    }
    // 使用http.createServer()方法创建http server
    // 并传入onRequest()方法
    // 然后使用listen()方法监听指定地址
    const http_server = http.createServer(onRequest);
    http_server.listen(port, host);
    console.log(`Server has started and listening on ${host}:${port}`)

}

module.exports = start;