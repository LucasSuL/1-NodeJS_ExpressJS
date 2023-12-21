const amount = 9;
if(amount > 9){
    console.log('big number');
}else{
    console.log('small number');
}
console.log('end');
console.log(__filename);

const { writeFile } = require('fs')

function print(){
    console.log('hello, world');
}
setInterval(print, 1000)



const names = require('./names')
const sayHi = require('./utils')
console.log(names);

sayHi(names.john)

console.log('test npm run dev');