const EventEmitter = require('events') //EventEmitter is a class
const myEmitter = new EventEmitter(); // create an instance

myEmitter.on('myEvent', ()=>{
    console.log('Event triggered');
})

myEmitter.emit('myEvent',{message: 'Hello'})