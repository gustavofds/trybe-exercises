// (Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

function convertRomanNumerals(romanNumber) {
  let numberResult = 0;
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let index = romanNumber.length - 1; index >= 0; index -= 1) {
    if (
      romanNumerals[romanNumber[index]] < romanNumerals[romanNumber[index + 1]]
    ) {
      numberResult -= romanNumerals[romanNumber[index]];
    } else {
      numberResult += romanNumerals[romanNumber[index]];
    }
  }
  console.log(numberResult);
  return numberResult;
}

convertRomanNumerals("IV");
convertRomanNumerals("V");
convertRomanNumerals("IX");
convertRomanNumerals("X");
convertRomanNumerals("XL");
convertRomanNumerals("L");
convertRomanNumerals("LVIII");

// 2: https://www.codewars.com/kata/5effa412233ac3002a9e471d

function add(num1, num2) {
  const stringNum1 = num1.toString();
  const stringNum2 = num2.toString();
  const biggestNum = num1 >= num2 ? stringNum1 : stringNum2;
  const lowestNum = num1 <= num2 ? stringNum1 : stringNum2;
  const maxAlgarisms = biggestNum.length;

  const lengthDiff = biggestNum.length - lowestNum.length;

  let resultArray = [];

  for (let index = maxAlgarisms - 1; index >= 0; index -= 1) {
    if (biggestNum[index] && lowestNum[index - lengthDiff]) {
      resultArray.unshift(
        Number(biggestNum[index]) + Number(lowestNum[index - lengthDiff])
      );
    } else {
      resultArray.unshift(Number(biggestNum[index]));
    }
  }

  return Number(resultArray.join(""));
}

console.log(add(16, 18));
console.log(add(122, 81));
