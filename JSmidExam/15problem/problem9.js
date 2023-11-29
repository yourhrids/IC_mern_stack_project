function parseString(...params) {
  let result;

  // Check if all parameters are numbers
  const areAllNumbers = params.every((param) => !isNaN(Number(param)));

  if (areAllNumbers) {
    // If all parameters are numbers, calculate the sum
    result = params.reduce((acc, num) => acc + Number(num), 0);
  } else {
    // If at least one parameter is not a number, concatenate the strings
    result = params.join(" ");
  }

  return result;
}

// Sample Input
console.log(parseString("21", "24", "40")); // Output: 85
console.log(parseString("Hello", "Alpha")); // Output: Hello Alpha
console.log(parseString("Summer", "2022")); // Output: Summer 2022
