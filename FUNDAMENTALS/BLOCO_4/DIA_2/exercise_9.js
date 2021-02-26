// Exercício 9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

let arr = [];

for (let index = 1; index <= 25; index += 1) {
  arr.push(index);
}

console.log(arr);

for (let index = 0; index < arr.length; index += 1) {
  console.log(arr[index] / 2);
}
