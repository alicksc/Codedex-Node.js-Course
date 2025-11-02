const http = require('http');
const PORT = 3003;

// create server
const server = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('💔😭😭😭😭');
});

// listen in on port
server.listen(PORT, () => {
    console.log(`Listening in on port ${PORT}`);
});