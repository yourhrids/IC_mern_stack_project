function mergeArrays(arr1, arr2) {
  // Concatenate the two arrays and then sort the resulting array
  const mergedArray = arr1.concat(arr2).sort((a, b) => a - b);

  return mergedArray;
}

console.log(mergeArrays([1, 3, 5, 7, 9], [2, 4, 6, 8, 10])); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(mergeArrays([2, 4, 6, 8, 10], [1, 3, 5, 7, 9])); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // Output: [1, 2, 3, 4, 5, 6]
