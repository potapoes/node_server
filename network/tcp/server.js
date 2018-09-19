const net = require('net');
const port = 8000;
// 创建tcp服务器
const server = net.createServer((socket)=>{
    console.log(`client connected`);

    // 监控客服端的数据
    socket.on('data', (data) => {
        console.log(`server got data from client: ${data.toString()}`);
    });
     // 发送数据给客服端
     socket.write('hello\r\n');

    // 监听客户端断开连接事件
    socket.on('end', (data) => {
        console.log('connection closed')
    })
   
})


// 启动服务
server.listen(port, ()=>{
    console.log(`server bound`)
})