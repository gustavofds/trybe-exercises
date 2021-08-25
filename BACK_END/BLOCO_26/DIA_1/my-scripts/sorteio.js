const { questionInt } = require('readline-sync');

const generateRandomNumber0To10 = () => Math.trunc(Math.random() * 11);

const randomNumber = generateRandomNumber0To10();

const selectedNumber = questionInt('Tente adivinhar o número sorteado (de 0 a 10): ');

function matchNumbers(selected, generated) {
  if (selected === generated) return 'Parabéns, número correto!';
  return `Opa, não foi dessa vez. O número era ${generated}`;
}

console.log(matchNumbers(selectedNumber, randomNumber));
