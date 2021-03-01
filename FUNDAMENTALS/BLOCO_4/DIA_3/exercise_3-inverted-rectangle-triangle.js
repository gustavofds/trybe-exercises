// 3- Agora inverta o lado do triângulo. Por exemplo:
/*
 *
 **
 ***
 ****
 *****
 */

let n = 5;

for (let index = 1; index <= n; index += 1) {
  let row = "";

  for (let indexSpaces = 1; indexSpaces <= n - index; indexSpaces += 1) {
    row += " ";
  }

  for (let indexColumn = 1; indexColumn <= index; indexColumn += 1) {
    row += "*";
  }
  console.log(row);
}
