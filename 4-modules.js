// const os = require('os')
// const user = os.userInfo()

// info of current user
// console.log(user);

// return sys uptime
// console.log(`The sys uptime is ${os.uptime} seconds`);

// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------

// const path = require('path');

// const filePath = path.join('/user', 'docs', 'index.html');
// console.log(`The file Path is: ${filePath}`);

// const absolutePath = path.resolve('src', 'app', 'index.js');
// console.log(`The absolute Path is: ${absolutePath}`);

// const fileName = path.basename('/home/user/documents/report.txt');
// const directoryName = path.dirname('/home/user/documents/report.txt');
// const fileExtension = path.extname('document.pdf');

// console.log(__dirname);

// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------
// fs
// const fs = require('fs');
// fs.readFile('./sources/test1.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// })
// console.log('reading in process....'); // because readFile is async (will not block others), 
// so that this line will pop up in terminal first.
// const toBeAppend = 'MODIFIED\n'
// fs.writeFile('./sources/test2.txt', toBeAppend,{flag:'a'} ,(err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(`test2.txt appended to ${toBeAppend}`);
//     }
// })

// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------

const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('welcome to our homepage')
        res.end()
    } else if (req.url === '/about') {
        res.write('our company....')
        res.end()
    } else {
        res.end(`
        <h1>Oops!</h1>
        <p>there's an error!</p>
        <a href = '/'>back to homepage</a>
        `)
    }
})

// server.listen(5000)
