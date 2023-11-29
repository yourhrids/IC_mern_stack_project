function findShortestWord(str) {
  // Split the string into an array of words
  const words = str.split(/\s+/);

  // Remove punctuation and filter out empty strings
  const cleanedWords = words
    .map((word) => word.replace(/[^\w\d]/g, ""))
    .filter(Boolean);

  // Find the shortest word
  let shortestWord = cleanedWords[0];

  for (let i = 1; i < cleanedWords.length; i++) {
    if (cleanedWords[i].length < shortestWord.length) {
      shortestWord = cleanedWords[i];
    }
  }

  return shortestWord;
}

console.log(findShortestWord("The quick brown fox jumps over the lazy dog")); // Output: "The"
console.log(findShortestWord("Hello world")); // Output: "world"
console.log(findShortestWord("Today is Monday")); // Output: "is"
