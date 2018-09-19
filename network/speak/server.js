const net = require('net');
const port = 8000;

const server = net.createServer();

server.on('connection', (socket) => {
    console.log('Got a new connection')
})
server.on('error', (err) => {
    console.log(`server error: ${err.message}`)
})

server.on('close', () => {
    console.log(`server closed`)
})

// 启动服务
server.listen(port, ()=>{
    console.log(`server chat`)
})