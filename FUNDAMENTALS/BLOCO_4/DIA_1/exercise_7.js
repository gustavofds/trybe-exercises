// Exercício 7 - Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F.
let notaPorcentagem = 100;

if (notaPorcentagem < 0 || notaPorcentagem > 100) {
  console.log("Erro. Nota inválida!");
} else if (notaPorcentagem >= 90) {
  console.log("A");
} else if (notaPorcentagem >= 80) {
  console.log("B");
} else if (notaPorcentagem >= 70) {
  console.log("C");
} else if (notaPorcentagem >= 60) {
  console.log("D");
} else if (notaPorcentagem >= 50) {
  console.log("E");
} else {
  console.log("F");
}
