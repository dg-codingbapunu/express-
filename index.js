
const http = require('http');
const fs = require('fs')

 const index = fs.readFileSync('index.html', 'utf-8');
const data = fs.readFileSync('data.json', 'utf-8')


const server = http.createServer((req, res) => {
console.log(req.url);

switch(req.url){
  case '/':
    res.setHeader('Content-Type', 'text/html');
    res.end(index);
   break;
case '/api':

res.setHeader('Content-type', 'application/json')

res.end(data);
  break;

default:
    res.writeHead(404,'NT_FOND');
    res.end();
}

console.log('server started');

// res.setHeader('Dummy', 'DummyValue')





})

server.listen(8080);