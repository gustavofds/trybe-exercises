//4- Depois, faça uma pirâmide com n asteriscos de base:
/*
n = 3
 *     (1 espaço + 1 asterisco)
***    (0 espaços + 3 asteriscos)

n = 5
  *    (2 espaços + 1 asterisco)
 ***   (1 espaço  + 3 asteriscos)
*****  (0 espaços + 5 asteriscos)

n = 7
   *     (3 espaços + 1 asterisco)
  ***    (2 espaços + 3 asterisco)
 *****   (1 espaço + 5 asterisco)
*******  (0 espaços + 7 asterisco)

n = 9
    *      (4 espaços + 1 asterisco)
   ***     (3 espaços + 3 asterisco)
  *****    (2 espaços + 5 asterisco)
 *******   (1 espaços + 7 asterisco)
*********  (0 espaços + 9 asterisco)

Nº de rows === Nº de números ímpares descendo até o 1
Math.ceil(n/2)

Nº máximo de espaços(1ª row) === Math.trunc(n/2)

Espaços descendem 1 a 1 até chegar em 0 na última row
 */

console.log("  *");
console.log(" ***");
console.log("*****");
