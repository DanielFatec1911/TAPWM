// Função com if 
function maiorNumeroIf(a, b, c, d) {
    let maior = a;
    if (b > maior) maior = b;
    if (c > maior) maior = c;
    if (d > maior) maior = d;
    return maior;
}

// Função com Math.max 
function maiorNumeroMax(a, b, c, d) {
    return Math.max(a, b, c, d);
}

// Função para ordenar três números em ordem crescente
function ordenarNumeros(a, b, c) {
    let numeros = [a, b, c];
    numeros.sort((x, y) => x - y);
    return numeros;
}

// Funções para mostrar os resultados
function mostrarMaiorIf() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);
    const num4 = parseFloat(document.getElementById('num4').value);
    const resultado = maiorNumeroIf(num1, num2, num3, num4);
    document.getElementById('resultadoIf').innerText = `Maior número: ${resultado}`;
}

function mostrarMaiorMax() {
    const num5 = parseFloat(document.getElementById('num5').value);
    const num6 = parseFloat(document.getElementById('num6').value);
    const num7 = parseFloat(document.getElementById('num7').value);
    const num8 = parseFloat(document.getElementById('num8').value);
    const resultado = maiorNumeroMax(num5, num6, num7, num8);
    document.getElementById('resultadoMax').innerText = `Maior número: ${resultado}`;
}

function mostrarOrdenados() {
    const num9 = parseFloat(document.getElementById('num9').value);
    const num10 = parseFloat(document.getElementById('num10').value);
    const num11 = parseFloat(document.getElementById('num11').value);
    const resultado = ordenarNumeros(num9, num10, num11);
    document.getElementById('resultadoOrdenados').innerText = `Números ordenados: ${resultado.join(', ')}`;
}
