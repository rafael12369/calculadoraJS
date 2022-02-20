// Nível 1:

function adicionar (num1, num2) {
   return num1 + num2;
}

function subtrair (num1, num2) {
    return num1 - num2;
}

function multiplicar (num1, num2) {
    return num1 * num2;
}

function dividir (num1, num2) {
    return num1 / num2;
}

// Nível 2:

console.log("-----Teste de Operações/Calculador-----");

// Adicionar e subtrair:
console.log("1+2= " + adicionar(1, 2) + "   2-1= " + subtrair(2, 1)); 

// Multiplicar:

console.log("2x2= " + multiplicar(2,2));

// Divisão:

console.log("10/2= " + dividir(10, 2));
console.log("0/10= " + dividir (0, 10));

// Nível 3:

function quadradoDoNumero(num) {
    return multiplicar(num, num);
}

function mediaDeTresNumeros(num1, num2, num3) {
    return adicionar(num1, num2) + num3;
}

function calculaPorcentagem(numTotal, numPorcentagem) {
    return numTotal * dividir(numPorcentagem, 100); 
}

function geradorDePorcentagem(num1, num2) {
    return multiplicar(num1, 100) / num2;
}

console.log("20% de 1000 é igual a " + calculaPorcentagem(1000, 20));

console.log("100 de 1000 equivale a porcentagem " + geradorDePorcentagem(100, 1000) + "%");