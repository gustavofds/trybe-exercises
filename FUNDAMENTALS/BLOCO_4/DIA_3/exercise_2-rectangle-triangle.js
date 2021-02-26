// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.

let n = 5;

for (let index = 1; index <= n; index += 1) {
  let row = "";

  for (let indexColumn = 1; indexColumn <= index; indexColumn += 1) {
    row += "*";
  }
  console.log(row);
}
