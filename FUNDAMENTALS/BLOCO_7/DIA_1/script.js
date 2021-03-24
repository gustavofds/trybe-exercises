// Parte I
// 1
const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }  
}

testingScope(true);
testingScope(false);

// 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortedArr = (arr) => `Os números ${arr.sort((a, b) => a - b)} estão ordenados de forma crescente!`

console.log(sortedArr(oddsAndEvens));