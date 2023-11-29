function removeDuplicates(names) {
  // Create a Set from the array to automatically remove duplicates
  const uniqueNamesSet = new Set(names);

  // Convert the Set back to an array
  const uniqueNamesArray = Array.from(uniqueNamesSet);

  return uniqueNamesArray;
}

// Sample Input
const studentNames = [
  "Zara",
  "Sadia",
  "Mahin",
  "Adnan",
  "Maisha",
  "Adnan",
  "Faiyaz",
];

// Output
const uniqueStudentNames = removeDuplicates(studentNames);
console.log(uniqueStudentNames);
