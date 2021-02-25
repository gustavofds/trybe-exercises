// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR.
// Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

const salarioBruto = 3000;
console.log("Salário Bruto: ", salarioBruto);

let aliquotaINSS;
let aliquotaIR;
let descontoIR;
let parcelaDeduzirIR;

if (salarioBruto <= 1556.94) {
  aliquotaINSS = 8 / 100;
} else if (salarioBruto <= 2594.92) {
  aliquotaINSS = 9 / 100;
} else if (salarioBruto <= 5189.82) {
  aliquotaINSS = 11 / 100;
}
// /\ Se o salárioBruto for maior que 5189.82, a aliquotaINSS vai ficar UNDEFINED, aí definimos o desconto direto como R$ 570,88

let descontoINSS = aliquotaINSS ? salarioBruto * aliquotaINSS : 570.88;

let salarioBase = salarioBruto - descontoINSS;
console.log("Salário Base: ", salarioBase);

if (salarioBase <= 1903.98) {
  aliquotaIR = 0;
} else if (salarioBase <= 2826.65) {
  aliquotaIR = 7.5 / 100;
  parcelaDeduzirIR = 142.8;
} else if (salarioBase <= 3751.05) {
  aliquotaIR = 15 / 100;
  parcelaDeduzirIR = 354.8;
} else if (salarioBase <= 4664.68) {
  aliquotaIR = 22.5 / 100;
  parcelaDeduzirIR = 636.13;
} else {
  aliquotaIR = 27.5 / 100;
  parcelaDeduzirIR = 869.36;
}

descontoIR = aliquotaIR * salarioBase - parcelaDeduzirIR;
console.log("Valor a descontar IR: ", descontoIR);

const salarioLiquido = salarioBase - descontoIR;
console.log("Salário Líquido: ", salarioLiquido);
