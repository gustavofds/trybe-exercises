const readline = require('readline-sync');

const distance = readline.questionInt('Qual a distância? (em m): ');
const time = readline.questionInt('Qual ao tempo? (em s): ');

const calcVelocity = function(distance, time) {
  return distance / time;
}

console.log(`A velocidade é ${calcVelocity(distance, time)} m/s`);
