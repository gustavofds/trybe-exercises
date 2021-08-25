const { questionInt } = require('readline-sync');
const imc = require('./imc');
const sorteio = require('./sorteio');
const velocidade = require('./velocidade');

const chooseScript = function() {
  const chosenScript = questionInt('Digite o número script desejado:\n1 - Calculadora de IMC;\n2 - Calculadora de Velocidade;\n3 - Jogo escolha o número.\n');

  if (chosenScript === 1) return imc();
  if (chosenScript === 2) return velocidade();
  if (chosenScript === 3) return sorteio();
  return console.log('Script inválido');
}

chooseScript();
