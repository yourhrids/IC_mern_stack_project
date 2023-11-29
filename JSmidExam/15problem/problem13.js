function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function findPrimeNumbers(arr) {
  // Use the filter method to create a new array with prime numbers
  const primeNumbers = arr.filter((number) => isPrime(number));

  return primeNumbers;
}

// Sample Input
const inputArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];

// Output
const primeNumbersArray = findPrimeNumbers(inputArray);
console.log(primeNumbersArray); // Output: [2, 3, 5, 7]
