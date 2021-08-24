const PESO = 115;
const ALTURA = 184;

const calcImc = function (peso, altura) {
  const imc = peso / ((altura/100)**2);

  return imc.toFixed(2);
}


console.log(`Seu IMC é ${calcImc(PESO, ALTURA)}`);
