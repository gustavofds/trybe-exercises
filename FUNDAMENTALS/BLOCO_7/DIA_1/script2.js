// Parte II
// 1 - Fatorial
// const calcFactorial = number => {
//   let factorial = number;
//   for (let index = number - 1; index >= 1; index -= 1) {
//     factorial *= index;
//   }
//   return factorial;
// }

const calcFactorial2 = number => number === 1 ? 1 : number * calcFactorial2(number - 1);

console.log(calcFactorial2(5));
console.log(calcFactorial2(4));
console.log(calcFactorial2(11));

// 2