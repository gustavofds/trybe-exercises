// Parte II
// 1 - Fatorial
const calcFactorial = number => {
  let factorial = number;
  for (let index = number - 1; index >= 1; index -= 1) {
    factorial *= index;
  }
  return factorial;
}

console.log(calcFactorial(5));
console.log(calcFactorial(4));