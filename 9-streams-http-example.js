//creating a simple HTTP server using Node.js that serves the content of a file (big.txt) 
// in response to incoming requests. 

const http = require('http')
const fs = require('fs')
const filePath = './sources/big.txt'

const server = http.createServer((req,res)=>{
    // const text = fs.readFileSync(filePath,'utf-8')
    // res.end(text)
    const fileStream = fs.createReadStream(filePath,'utf-8') // read the local big file
    fileStream.on('open',()=>{
        fileStream.pipe(res) // send the file directly to client as a response
    })
    fileStream.on('error', ()=>{
        res.end(error)
    })
})

const PORT = 5000
server.listen(PORT)