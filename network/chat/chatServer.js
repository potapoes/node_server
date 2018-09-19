const net = require('net');
const port = 8000;
const server = net.createServer();

// 存储所有客户端的socket
let sockets = []
server.on('connection', (socket) => {
    console.log('Got a new connection');

    sockets.push(socket);

    socket.on('data', (data) => {
        console.log(`Got data: ${data}`)

        sockets.forEach((otherSocket) => {
            if(otherSocket !== socket) {
                otherSocket.write(data)
            }
        })
    })

    
    socket.on('close', () => {
        console.log(`A client connection closed`);
        let index = sockets.indexOf(socket);
        sockets.splice(index, 1);
        console.log(sockets)
    })
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