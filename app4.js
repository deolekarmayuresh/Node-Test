const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('messagedLogged', (arg) => {
    console.log('Listener called', arg);
});

emitter.emit('messagedLogged', { id: 1, url: 'https://test.finestar.xyz'});
