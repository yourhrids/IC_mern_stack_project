function findMissingNumber(arr) {
  // Calculate the expected sum of consecutive integers from 1 to n
  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;

  // Calculate the sum of the given array
  const actualSum = arr.reduce((sum, num) => sum + num, 0);

  // The missing number is the difference between the expected and actual sums
  const missingNumber = expectedSum - actualSum;

  return missingNumber;
}

// Example Input
const inputArray = [1, 2, 3, 5, 6, 7, 8];

// Output
const missingNumber = findMissingNumber(inputArray);
console.log(missingNumber); // Output: 4
