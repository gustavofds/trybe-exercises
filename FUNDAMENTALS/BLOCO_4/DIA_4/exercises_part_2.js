// Exercise 1

function isPalindrome(word) {
  for (let index = 0; index < word.length; index += 1) {
    if (word[index] !== word[word.length - 1 - index]) {
      return false;
    }
  }

  return true;
}

console.log(isPalindrome("desenvolvimento"));
console.log(isPalindrome("arara"));
console.log(isPalindrome("renner"));
console.log(isPalindrome("gustavg"));

// Exercise 2

function higherIndex(arrNumbers) {
  let higherIndex = 0;

  for (let index = 0; index < arrNumbers.length; index += 1) {
    if (arrNumbers[index] > arrNumbers[higherIndex]) {
      higherIndex = index;
    }
  }

  return higherIndex;
}

console.log(higherIndex([2, 3, 6, 7, 10, 1]));
console.log(higherIndex([2, 3, 6, 555, 7, 10]));

// Exercise 3

function lowerIndex(arrNumbers) {
  let lowerIndex = 0;

  for (let index = 0; index < arrNumbers.length; index += 1) {
    if (arrNumbers[index] < arrNumbers[lowerIndex]) {
      lowerIndex = index;
    }
  }

  return lowerIndex;
}

console.log(lowerIndex([2, 4, 6, 7, 10, 0, -3]));

// Exercise 4
const largestName = function (arrNames) {
  let largestName = arrNames[0];

  for (let index = 0; index < arrNames.length; index += 1) {
    if (arrNames[index].length > largestName.length) {
      largestName = arrNames[index];
    }
  }

  return largestName;
};

console.log(
  largestName(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"])
);
