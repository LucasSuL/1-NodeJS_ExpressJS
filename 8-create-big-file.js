const fs = require('fs')

for (let i = 0; i < 10000; i++){
    fs.writeFileSync('./sources/big.txt',`hello world ${i}\n`,{flag : 'a'}) // have to yuse Sync version here, because I need to wait each operation to end before iterating to next loop.
}