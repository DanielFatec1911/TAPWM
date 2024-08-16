    function calcular(array) {
    
        const soma = array.reduce((acc, num) => acc + num, 0);
    

                const [primeiro, segundo] = array;
                      const quadradoPrimeiro = Math.pow.apply(null, [primeiro, 2]);
                            const quadradoSegundo = Math.pow.apply(null, [segundo, 2]);
  
        console.log(`A soma dos três números é: ${soma}.`);
        console.log(`O quadrado do primeiro é: ${quadradoPrimeiro}.`);
        console.log(`O quadrado do segundo é: ${quadradoSegundo}.`);
  }
  

                                calcular([2, 3, 4]);

                                function verificarSubconjunto(palavra1, palavra2) {
  
  if (!palavra1 || !palavra2) {
    throw new Error("Erro: Uma ou ambas as palavras são vazias ou indefinidas.");
  }

  
        if (palavra1.includes(palavra2)) {
              return `"${palavra2}" é um subconjunto de "${palavra1}".`;
  }          else {
                     return `"${palavra2}" não é um subconjunto de "${palavra1}".`;
  }
}


try {
                                                                                       //exemplos:
            console.log(verificarSubconjunto("programação", "programa")); // "programa" é um subconjunto de "programação"
                console.log(verificarSubconjunto("coração", "ação")); // "ação" é um subconjunto de "coração"
                     console.log(verificarSubconjunto("casa", "asa")); // "asa" é um subconjunto de "casa"
                         console.log(verificarSubconjunto("livro", "casa")); // "casa" não é um subconjunto de "livro"
  

  console.log(verificarSubconjunto("palavra", "")); // Deve lançar erro
} catch (e) {
  console.error(e.message);
}

  