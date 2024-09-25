//criar servidor
var http = require('http');
var server = http.createServer(function (req,res){
    res.end("<html><body>site da fatec Sorocaba</bodey></html>");

});

server.listen(3000);