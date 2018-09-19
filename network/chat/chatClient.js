const net = require('net');
const port = 8000;

process.stdin.resume();
process.stdin.setEncoding('UTF8');

const client = net.connect({port: port}, ()=>{
    console.log('Connected to server');

    // 获取输入的字符串
    console.log('input: ');
    process.stdin.on('data', (data)=>{
        console.log('input: ');
        client.write(data);

        // 输入 'close' 字符串时关闭连接
        if(data === 'close\n'){
            client.end();
        }
    });
})

client.on('data', (data)=>{
    console.log(`Other user\'s input ${data.toString()}`);
})

client.on('end', ()=>{
    console.log('Disconnected from server');
    // 退出客户端程序
    process.exit();
})