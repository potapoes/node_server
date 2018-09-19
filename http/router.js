// 创建路由

const fs = require('fs');
const html_404 = './views/404.html'

const route= (handle, pathname, res, req) => {
    console.log( `About to route a request for ${pathname}`);

    //判断此url是否存在特定处理函数
    // 存在则调用handle处理
    // 不存在则返回404页面
    if(typeof handle[pathname] === 'function') {
        // 处理介绍handle函数
        handle[pathname](res, req);
    } else {
        console.log(`No request handler found for ${pathname}`);

        // 读取404页面
        // 所有页面都存放在view 文件夹下
        var content = fs.readFileSync(html_404);
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write(content);
        res.end();
    }
}
module.exports = route;