// ******************** 4.4 Exercícios de fixação **************
// ** Objetos

const player = {
  name: "Marta",
  lastName: "Silva",
  age: 34,
  medals: { golden: 2, silver: 3 },
};

player["bestInTheWorld"] = [2006, 2007, 2008, 2009, 2010, 2018];

console.log(
  `A jogadora ${player.name} ${player.lastName} tem ${player.age} anos de idade.`
);
console.log(
  `A jogadora ${player.name} ${player.lastName} foi eleita a melhor do mundo por ${player.bestInTheWorld.length} vezes.`
);
console.log(
  "A jogadora possui " +
    player.medals.golden +
    " medalhas de ouro e " +
    player.medals.silver +
    " medalhas de prata."
);

// ** for/in
var fruits = ["Apple", "Banana", "Orange"];
for (let x in fruits) {
  console.log(x);
}

// Funções
// Refatorar exercícios da primeira parte
// Exercício 1

function adicao(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

function multiplicacao(a, b) {
  return a * b;
}

function divisao(a, b) {
  return a / b;
}

function modulo(a, b) {
  return a % b;
}

// Exercise 2
function comparisson(a, b) {
  if (a > b) {
    return "O número 'a' é maior";
  } else if (b > a) {
    return "O número 'b' é maior";
  }
}

// Exercise 3
function comparisson3Numbers(a, b, c) {
  if (a > b && a > c) {
    return `O maior número é ${a} (a)`;
  } else if (b > a && b > c) {
    return `O maior número é ${b} (b)`;
  } else if (c > a && c > b) {
    return `O maior número é ${c} (c)`;
  }
}

console.log("Adição: " + adicao(15, 10));
console.log("Subtração: " + subtracao(15, 10));
console.log("Multiplicação: " + multiplicacao(15, 10));
console.log("Divisão: " + divisao(15, 10));
console.log("Módulo: " + modulo(15, 10));
console.log(comparisson(2, 222));
console.log(comparisson3Numbers(5555, 2332, 222));
