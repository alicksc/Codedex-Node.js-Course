const http = require('http');
const PORT = 3003;

const server = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.write("Welcome to Neon Noodles!");
    response.write("\n");
    response.write("\n");
    response.write("==============");
    response.write("\n");
    response.write("LATE NITE MENU");
    response.write("\n");
    response.write("==============");
    response.write("\n");
    response.write("\n");
    response.write("RAMEN");
    response.write("\n");
    response.write("1. Quantum Truffle Ramen");
    response.write("\n");
    response.write("\n");
    response.write("EXTRA TOPPINGS");
    response.write("\n");
    response.write("1. Hacktivist Pork");
    response.write("\n");
    response.write("2. Cybernetic Egg");
    response.write("\n");
    response.end("3. Glowing Scallions");
});

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})