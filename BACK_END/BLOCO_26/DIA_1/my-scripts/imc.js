const readline = require('readline-sync');

const peso = readline.questionFloat('Qual seu peso? (em Kg): ');
const altura = readline.questionFloat('Qual sua altura? (em cm): ');

const calcImc = function (peso, altura) {
  const imc = peso / ((altura/100)**2);

  return imc.toFixed(2);
}


console.log(`Seu IMC é ${calcImc(peso, altura)}`);
