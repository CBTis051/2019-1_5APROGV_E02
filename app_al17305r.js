var http = require('http');
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
    
    res.end('hola mundo node JS Repo GIT - Morales Gomez Jorge Luis\n');    
}).listen(8081);
console.log('server running on port 8081');