//4- Depois, faça uma pirâmide com n asteriscos de base:
/*
n = 3
 *     (1 space + 1 asterisk)
***    (0 spaces + 3 asterisks)

n = 5
  *    (2 spaces + 1 asterisk)
 ***   (1 space  + 3 asterisks)
*****  (0 spaces + 5 asterisks)

n = 7
   *     (3 spaces + 1 asterisk)
  ***    (2 spaces + 3 asterisk)
 *****   (1 space + 5 asterisk)
*******  (0 spaces + 7 asterisk)

n = 9
    *      (4 spaces + 1 asterisk)
   ***     (3 spaces + 3 asterisk)
  *****    (2 spaces + 5 asterisk)
 *******   (1 spaces + 7 asterisk)
*********  (0 spaces + 9 asterisk)

Number of rows === Nº of odd numbers descending down to 1
Math.ceil(n/2)

Max number of spaces (1ª row) === Math.trunc(n/2)

Number of spaces descend 1 to 1 until it reaches 0 in the last row.
 */

// n should be > 1 and an odd number
const n = 11;

const numberRows = Math.ceil(n / 2);
const maxSpaces = Math.trunc(n / 2);
console.log("numberRows: ", numberRows);
console.log("maxSpaces: ", maxSpaces);

// Max spaces string
let spacesRow = "";
for (let indexSpaces = maxSpaces; indexSpaces >= 0; indexSpaces -= 1) {
  spacesRow += " ";
}

for (let index = 1; index <= n; index += 2) {
  let row = "";

  for (let indexAsterisks = 1; indexAsterisks <= index; indexAsterisks += 1) {
    row += "*";
  }

  spacesRow = spacesRow.replace(spacesRow[spacesRow.length - 1], "");
  console.log(spacesRow + row);
}
