const EventEmitter = require('events');

// Create an emitter class
class MyEmitter extends EventEmitter {}

// Init object
const myEmitter = new MyEmitter();

// Create event listener
myEmitter.on('event', () => console.log('event fired'));

// Init event
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');