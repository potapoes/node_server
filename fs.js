const fs = require('fs');

// 异步
// fs.unlink('./other/text.txt', function(err){
//     if(err){
//         throw err;
//     }
//     console.log('成功删除了')
// })

// // 同步
// fs.unlinkSync('./other/text.txt')
//     console.log('成功删除了')
    
// fs.readFile('./other/text.txt', (err, data) =>{
//     if(err) {
//         throw err
//     }
//     console.log("toString:",data.toString());
// })

// fs.readFile('./other/text.txt', 'utf-8', (err, data)=>{
//     if(err){
//         throw err;
//     }
//     console.log("utf-8:", data)
// })

// 写入文件内容（如果文件不存在会创建一个文件）
// 写入时会先清空文件
// flag:r代表读取(read)文件，，w代表写入(write)文件，a代表追加(append)写入文件

// fs.writeFile('./other/test.txt', 'test test',{ 'flag': 'a' }, function(err) {
//     if (err) {
//         throw err;
//     }

//     console.log('Saved.');

//     // 写入成功后读取测试
//     fs.readFile('./test2.txt', 'utf-8', function(err, data) {
//         if (err) {
//             throw err;
//         }
//         console.log(data);
//     });
// });

// fs.open('./other/text.txt','r', (err, fd)=>{
//     if(err) {
//         throw err;
//     }
//     console.log('open file success.');

//     const buffer = new Buffer(255);

//     // fs.read(fd, buffer, offset, length, position, callback)
//     // fd是文件描述符，必须接收fs.open()方法中的回调函数返回的第二个参数；
//     // buffer是存放读取到的数据的Buffer对象；
//     // offset指定向buffer中存放数据的起始位置；
//     // length指定读取文件中数据的字节数；
//     // position指定在文件中读取文件内容的起始位置；
//     // callback是回调函数，回调函数的参数：
//     // err用于抛出异常；
//     // bytesRead是从文件中读取内容的实际字节数；
//     // buffer是被读取的缓存区对象。
//     fs.read(fd, buffer, 0, 20, 0,(err, bytesRead, buffer)=>{
//         if(err) {
//             throw err;
//         }
//         console.log(bytesRead, buffer.slice(0, bytesRead).toString());
//         fs.close(fd);
//     })
// })

// fs.open('./other/text.txt', 'w', (err, fd)=>{
//     if(err){
//         throw err;
//     }
//     console.log('open');
//     const buffer = new Buffer('shiyanlou');
//     fs.write(fd, buffer, 0, 9, 0, (err, written, buffer)=>{
//         if(err){
//             throw err;
//         }
//         console.log("write success", written);
//         let byteLength = buffer.byteLength;
//         console.log(byteLength, buffer.slice(0, byteLength).toString())
//     })
// })

// fs.mkdir('./other/text2.txt', (err)=>{
//     if(err){
//         throw err;
//     }
//     console.log('make dir success');
// })
// files:每个元素是此目录下的文件夹或文件
fs.readdir('./other', (err, files)=>{
    if(err){
        throw err;
    }
    console.log(files)
});