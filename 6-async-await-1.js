const fs = require('fs')

const getText = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

const start = async () => {
    try {
        const first = await getText('./sources/test1.txt')
        const second = await getText('./sources/test2.txt')

        console.log(first, second);
    } catch (err) {
        console.log(err)
    }
    console.log('start finish');
}
start()
console.log('pgm finish');