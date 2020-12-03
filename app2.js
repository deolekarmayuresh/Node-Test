const os = require('os');

var tmemory = os.totalmem();
var fmemory = os.freemem();

console.log(tmemory);
console.log(`Free Memeory: ${fmemory}`);