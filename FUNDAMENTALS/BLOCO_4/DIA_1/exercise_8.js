// Exercício 8 - Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .

let a = 10;
let b = 5;
let c = 3;

let isEven = false;

if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
  isEven = true;
}
console.log(isEven);
