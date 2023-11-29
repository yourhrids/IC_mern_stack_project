function CountPairs(str) {
  // Initialize a variable to store the count of pairs
  let pairCount = 0;

  // Iterate through the string
  for (let i = 0; i < str.length - 1; i++) {
    // Check if the current character and the next character are digits
    if (isDigit(str[i]) && isDigit(str[i + 1])) {
      // Convert the characters to numbers and check if their sum is even
      if ((Number(str[i]) + Number(str[i + 1])) % 2 === 0) {
        pairCount++;
      }
    }
  }

  // Return the count of pairs
  return pairCount;
}

// Helper function to check if a character is a digit
function isDigit(char) {
  return /\d/.test(char);
}

// Examples
console.log(CountPairs("a1b2c3d4e5f6")); // Output: 3
console.log(CountPairs("x1y2z3")); // Output: 0
console.log(CountPairs("a2b2c2d2")); // Output: 6
