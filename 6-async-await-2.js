const fs = require('fs').promises // add .promise

const start = async () => {
    try {
        const first = await fs.readFile('./sources/test1.txt', 'utf8')
        const second = await fs.readFile('./sources/test2.txt', 'utf8')
        await fs.writeFile('./sources/test3.txt', `this is test3\n${first}\n${second}`)
        console.log(first, second);
    } catch (err) {
        console.log('An error occured: ', err);
    }
}
start()