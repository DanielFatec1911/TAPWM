var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.get('/', function(req,res){
    res.render("home/index");
})
app.get('/formulario_adicionar_usuario', function(req,res){
    res.render("informacao/historia");
});

app.get('/', function(req, res) {
    res.end("<html><body>Site Da Fatec Sorocaba</body></html>");
});

app.get('/historia', function(req, res) {
    res.send("secao/historia");
});

app.get('/cursos', function(req, res) {
    res.send("secao/cursos");
});

app.get('/professores', function(req, res) {
    res.send("secao/professores");
});

app.listen(3000, function() {
    console.log("Servidor com Express foi carregado");
});
