const http = require('http');
const PORT = 3003;

const server = http.createServer((request, response) => {
    // default response settings
    let statusCode = 200;
    let contentType = 'text/html; charset=utf-8';
    let content = '';

    if(request.url === '/') {
        content = '<h1>Outside the house</h1>';
    } else if(request.url === '/living-room') {
        content = '<h1>Living Room</h1>';
    } else if(request.url === '/dining-room') {
        content = '<h1>Dining Room</h1>';
    } else if(request.url === '/kitchen') {
        content = '<h1>Kitchen</h1>';
    } else if(request.url === '/bedroom') {
        content = '<h1>Bedroom</h1>';
    } else if(request.url === '/office') {
        content = '<h1>Office</h1>';
    } else {
        // no routes found, 404
        statusCode = 404;
        content = '<h1>404 Not Found</h1><p>Page does not exist.</p>';
    }
    
    // send final response
    response.writeHead(statusCode, { 'Content-Type': contentType });
    response.end(content);
});

server.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
});