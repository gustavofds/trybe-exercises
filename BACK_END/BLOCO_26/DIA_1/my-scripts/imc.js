const readline = require('readline-sync');

const peso = readline.questionFloat('Qual seu peso? (em Kg): ');
const altura = readline.questionFloat('Qual sua altura? (em cm): ');

const calcImc = function (peso, altura) {
  const imc = peso / ((altura/100)**2);

  return imc.toFixed(1);
}

const classificacaoImc = function (imc) {
  if (imc < 18.5) return 'Abaixo do peso (magreza)';
  if (18.5 <= imc && imc <= 24.9) return 'Peso normal';
  if (25.0 <= imc && imc <= 29.9) return 'Acima do peso (sobrepeso)';
  if (30.0 <= imc && imc <= 34.9) return 'Obesidade grau I';
  if (35.0 <= imc && imc <= 39.9) return 'Obesidade grau II';
  return 'Obesidade graus III e IV';
}

const imc = calcImc(peso, altura);

console.log(`Seu IMC é ${imc}`);
console.log(classificacaoImc(imc));
