// Exercicio 9 - Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .

let a = 10;
let b = 4;
let c = 3;

let isOdd = false;

if (a % 2 === 1 || b % 2 === 1 || c % 2 === 1) {
  isOdd = true;
}
console.log(isOdd);
