const EventEmitter = require('events'); // EventEmitter is a class

// Create an instance of EventEmitter
const myEmitter = new EventEmitter();

// Attach an event listener for the 'myEvent' event
myEmitter.on('myEvent', (data) => {
    console.log('Event triggered with data:', data);
});

// Emit the 'myEvent' event with some data
myEmitter.emit('myEvent', { message: 'Hello, event-driven programming!' });
