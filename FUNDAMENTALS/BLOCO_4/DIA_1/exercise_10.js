// Exercicio 10 - Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
let custoDoProduto = 33;
let valorDeVenda = 100;

let imposto = custoDoProduto * 0.2;
let lucro = valorDeVenda - (custoDoProduto + imposto);
let lucroTotal = 1000 * lucro;

if (custoDoProduto < 0 || valorDeVenda < 0) {
  console.log("ERRO! Valores incorretos");
} else {
  console.log(lucroTotal);
}
