function getMaxProduct(arr) {
  if (arr.length < 2) {
    return "Not enough elements to calculate the product.";
  }

  let maxProduct = arr[0] * arr[1];

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const product = arr[i] * arr[j];
      if (product > maxProduct) {
        maxProduct = product;
      }
    }
  }

  return maxProduct;
}

// Sample Input
const inputArray = [2, 3, 5, 6, 7];

// Output
const maxProduct = getMaxProduct(inputArray);
console.log(maxProduct); // Output: 42
