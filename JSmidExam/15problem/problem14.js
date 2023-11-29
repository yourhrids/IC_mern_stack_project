function printMirroredTriangle(rows) {
  for (let i = 1; i <= rows; i++) {
    // Create spaces before the asterisks
    let spaces = " ".repeat(rows - i);

    // Create the mirrored pattern of asterisks
    let asterisks = "*".repeat(i) + "*".repeat(i - 1);

    // Print the row
    console.log(spaces + asterisks);
  }
}

// Example usage with user input
const numberOfRows = prompt(
  "Enter the number of rows for the mirrored triangle:"
);
printMirroredTriangle(Number(numberOfRows));
