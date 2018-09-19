const dgram = require('dgram');
const server = dgram.createSocket('udp4');

server.on(error, () =>{
    console.log(`server error:\n ${err.stack}`)
})
