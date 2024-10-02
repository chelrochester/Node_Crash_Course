const EventEmitter = require('events');
const uuid = require('uuid');

console.log(uuid.v4()); //this generates a random id

class Logger extends EventEmitter {
    log(msg) {
        // Call/raise event
        this.emit('message', { id: uuid.v4(), msg });
    }
}

// module.exports = Logger;

const logger = new Logger();

logger.on('message', data => console.log('called listener:', data));

logger.log('Hello, World');