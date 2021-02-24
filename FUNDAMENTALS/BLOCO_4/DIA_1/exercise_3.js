// Exercício 3 Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

let a = 2333;
let b = 144;
let c = 555;

if (a > b && a > c) {
  console.log(`O maior número é ${a} (a)`);
} else if (b > a && b > c) {
  console.log(`O maior número é ${b} (b)`);
} else if (c > a && c > b) {
  console.log(`O maior número é ${c} (c)`);
}
