// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n .

let n = 5;

for (let index = 1; index <= n; index += 1) {
  let row = "";
  for (let indexColumn = 1; indexColumn <= n; indexColumn += 1) {
    row += "*";
  }
  console.log(row);
}
