function countWords(inputString) {
  // Using split() to split the string into an array of words
  const words = inputString.split(/\s+/);

  // Returning the length of the array, which is the number of words
  return words.length;
}

// Example usage:
const inputText = "This is a sample sentence.";
const result = countWords(inputText);
console.log(`The number of words in the given string is: ${result}`);
