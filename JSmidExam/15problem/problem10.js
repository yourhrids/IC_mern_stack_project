function getPositiveNumbers(arr) {
  // Use the filter method to create a new array with positive numbers
  const positiveNumbers = arr.filter((number) => number > 0);

  return positiveNumbers;
}

// Sample Input
const inputArray = [2, -5, 10, -3, 8, -1, 0, 7];

// Output
const positiveNumbersArray = getPositiveNumbers(inputArray);
console.log(positiveNumbersArray);
