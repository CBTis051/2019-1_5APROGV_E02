var http = require('http');
http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type': 'application/json; charset=utf8'});

        res.end('Hola mundo Node JS Repo GIT - Chávez González Rodolfo\n');
    }).listen(8081);
    console.log('Server runningnon port 8081');