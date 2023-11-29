function isPalindrome(str) {
  // Convert the string to lowercase to make the check case-insensitive
  str = str.toLowerCase();

  // Use two pointers to check if the string is a palindrome
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
console.log(isPalindrome("rotator")); // Output: true
console.log(isPalindrome("peep")); // Output: true
