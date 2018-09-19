// 处理url请求

const fs = require('fs');
const home_page = './views/home.html';
const about_page = './views/about.html'

// home.html 页面
const home = (res) => {
    console.log(`Request handler "home" was called.`);
    
    // 读取home.html
    const content = fs.readFileSync(home_page);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(content);
    res.end();
}
const about = (res) => {
    console.log(`Request handle "about" was called`);

    // 读取about.html
    const content = fs.readFileSync(about_page);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(content);
    res.end();
}
module.exports = {
    home: home,
    about: about
}