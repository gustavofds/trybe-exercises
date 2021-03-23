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
const longestWord = phrase => {
  const words = phrase.split(' ');
  let longest = words[0];

  for (let index = 1; index < words.length; index += 1) {
    longest = longest.length < words[index].length ? words[index] : longest; 
  }

  return longest;
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")) // retorna 'aconteceu'