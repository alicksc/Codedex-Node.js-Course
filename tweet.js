const http = require('http');
const PORT = 3003;

const server = http.createServer((request, response) => {
    let statusCode = 200;
    let contentType = "text/html; charset=utf-8"
    let content = "";
    
    if(request === 'POST') {
        let message = "";

        // collect data in chunks
        request.on('data', (chunk) => {
            message += chunk;
        });

        request.on('end',() => {
            console.log("Tweet: ", message);
            
            response.writeHead(statusCode, { 'Content-Type': contentType });
            response.end("here's your tweet");
        });
    } else {
        // error 404
        response.writeHead(404, { 'Content-Type': contentType });
        response.end("ummm");
    }
});

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})