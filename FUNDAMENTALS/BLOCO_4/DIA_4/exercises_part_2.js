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

function higherIndex(arr) {
  let higherIndex = 0;

  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] > arr[higherIndex]) {
      higherIndex = index;
    }
  }

  return higherIndex;
}

console.log(higherIndex([2, 3, 6, 7, 10, 1]));
console.log(higherIndex([2, 3, 6, 555, 7, 10]));
