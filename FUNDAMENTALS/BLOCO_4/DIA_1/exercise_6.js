// Exercício 6 - Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

let chessPiece = "KiNg";

switch (chessPiece.toLowerCase()) {
  case "king":
    console.log("King -> any direction (one square)");
    break;

  case "queen":
    console.log("Queen -> any direction");
    break;

  case "rook":
    console.log("Rook -> forwards");
    break;

  case "bishop":
    console.log("Bishop -> diagonals");
    break;

  case "knight":
    console.log("Knight -> extended diagonal ");
    break;

  case "pawn":
    console.log("Pawn -> forward (one square)");
    break;

  default:
    console.log("Please inform a valid chess piece! ♟");
}
