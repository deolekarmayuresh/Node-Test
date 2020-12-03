
var http = require('http');

const server =  http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World!');
        res.end();
    }

    if (req.url === '/data') {
        res.writeHead(200, {'content-Type': 'application/json'});
        res.write(JSON.stringify({ message: 'Hello,1,2,3' }));
        res.end;
    }
});

// server.on('connection', (Socket) => {
//     console.log('New Connection..........');
// })

server.listen(8000);

console.log('Hello');

