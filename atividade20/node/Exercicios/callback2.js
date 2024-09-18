const prompt = require("prompt-sync")();

function exibeMensagensNaOrdem(mensagem, callback){
    console.log(mensagem)
    callback();
}
//executando
exibeMensagensNaOrdem('essa é a primeira mensgaem exibida na ordem', function(){
    console.log('essa é a segunda mensagem exibida na ordem');

});