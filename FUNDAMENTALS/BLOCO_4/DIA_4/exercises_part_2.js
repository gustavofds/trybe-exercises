// Exercise 1

function isPalindrome(word) {
  for (let index = 0; index < word.length; index += 1) {
    if (word[index] !== word[word.length - 1 - index]) {
      return false;
    } else {
      return true;
    }
  }
}

console.log(isPalindrome("desenvolvimento"));
console.log(isPalindrome("arara"));
console.log(isPalindrome("renner"));
console.log(isPalindrome("gustavo"));
