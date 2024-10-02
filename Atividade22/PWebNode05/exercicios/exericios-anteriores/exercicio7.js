var https = require('http');
var server = http.createServer (function(req, res){
    var opcao = req.url;
    if(opca=='/historia'){
        res.end("<html><body>Hisoria da fatec Sorocaba</bodey></html>")
    }
    else if(opca=='/curso'){
        res.end("<html><body>Cursos</bodey></html>");
    }
    else if (opcao=='/professores'){
        res.end("<html><body>Professores</bodey></html>");   
    }
    res.end("<html><body>Site Da Fatec/bodey></html>");
});
server.listen(3000);