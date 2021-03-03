// 5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
/*
n = 7

   *
  * *
 *   *
*******
 */

const n = 7;

const maxSpaces = Math.trunc(n / 2);

// Max spaces string
let spacesRow = "";
for (let indexSpaces = maxSpaces; indexSpaces > 0; indexSpaces -= 1) {
  spacesRow += " ";
}

for (let index = 1; index <= n; index += 2) {
  let row = "";

  for (let indexAsterisks = 1; indexAsterisks <= index; indexAsterisks += 1) {
    if (indexAsterisks === 1 || indexAsterisks === index || index === n) {
      row += "*";
    } else {
      row += " ";
    }
  }

  console.log(spacesRow + row);

  spacesRow = spacesRow.replace(spacesRow[spacesRow.length - 1], "");
}
