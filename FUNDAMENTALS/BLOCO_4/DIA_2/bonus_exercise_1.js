let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index++) {
  for (let previousIndex = 0; previousIndex < index; previousIndex++) {
    if (numbers[index] < numbers[previousIndex]) {
      let position = numbers[index];

      numbers[index] = numbers[previousIndex];
      numbers[previousIndex] = position;
    }
  }
}

console.log(numbers);
