const http = require('http');

const server = http.createServer((request, response) => {
  if (request.method === 'POST') {
    let message = '';

    request.on('data', (chunk) => {
      message += chunk;
    });

    request.on('end', () => {
      console.log('New message:', message); // Log the message to the console

      response.writeHead(200, { 'Content-Type': 'text/plain' });
      response.end('Message received!');
    });
  } else {
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.end('Go back to your terminal!');
  }
});

server.listen(3003, () => {
  console.log('Server is running at http://localhost:3003');
});