// Create a readable stream
const fs = require('fs')
const filePath = './sources/big.txt'
const readStream = fs.createReadStream(filePath,'utf-8')
// Handle events on the stream 
// 1-when a chunk of data is read 
readStream.on('data', (chunk)=>{
    console.log(`A chunk of data read: ${chunk}`);
})
// 2-when the entire file has been read 
readStream.on('end',()=>{
    console.log('Read is over');
})
// 3-there's an error reading the file
readStream.on('error',(err)=>{
    console.log('An error occured: ',err);
})
