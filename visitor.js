const http = require('http');
const PORT = 3003;
let visitors = 0;

const server = http.createServer((request, response) => {
    if(request.method === 'GET') {
        visitors++;
        console.log(`Visitors: ${visitors}`);
    }
})

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})