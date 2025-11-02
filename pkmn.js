const http = require('http');
const PORT = 3003;

const server = http.createServer((request, response) => {
    let statusCode = 200;
    let contentType = 'text/html; charset=utf-8'
    let content = "";

    if(request.url === '/') {
        content = '<h1>Pokemon Center</h1>';
    } else if(request.url === '/charizard') {
        content = '<h1>Shiny Charizard</h1><img src="https://raw.githubusercontent.com/msikma/pokesprite/master/pokemon-gen8/shiny/charizard.png"></img>';
    } else if(request.url === '/rotom-heat') {
        content = '<h1>Shiny Rotom Heat</h1><img src="https://raw.githubusercontent.com/msikma/pokesprite/master/pokemon-gen8/shiny/rotom-heat.png"></img>';
    } else {
        // update to error status code
        statusCode = 404;
        content = '<h3>This Pokemon is currently resting!';
    }

    response.writeHead(statusCode, { 'Content-Type': contentType });
    response.end(content);
});

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})