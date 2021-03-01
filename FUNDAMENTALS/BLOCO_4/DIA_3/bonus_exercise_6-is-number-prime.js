// Faça um programa que diz se um número definido numa variável é primo ou não.

let number = 11;
let isPrime = true;

for (let index = 2; index < number; index += 1) {
  if (!(number % index)) {
    isPrime = false;
  }
}

if (isPrime) {
  console.log(`${number} is a prime number`);
} else {
  console.log(`${number} is NOT a prime number`);
}
