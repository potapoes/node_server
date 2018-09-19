const net = require('net');
const port = 8000;
// 连接服务器
const client =  net.connect({port:port}, ()=>{
    console.log(`connected to server`);
    client.write('World!\r\n')
});

// 接收服务端的数据
client.on('data', (data) => {
    console.log(`client got data from server: ${data.toString()}`);
    // 断开连接
    client.end()
});

// 断开连接
client.on('end', () => {
    console.log('disconnected from server');
})
