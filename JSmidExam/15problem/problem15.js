function printPalindromeTriangle(rows) {
  for (let i = 1; i <= rows; i++) {
    // Spaces before the palindrome
    let spaces = " ".repeat(rows - i);

    // Constructing the left side of the palindrome
    let leftSide = "";
    for (let j = i; j >= 1; j--) {
      leftSide += j;
    }

    // Constructing the right side of the palindrome
    let rightSide = "";
    for (let j = 2; j <= i; j++) {
      rightSide += j;
    }

    // Combining left and right sides to form the palindrome
    let palindrome = leftSide + rightSide;

    // Printing the row with appropriate spacing
    console.log(spaces + palindrome);
  }
}

// Get user input for the number of rows
let numRows = parseInt(
  prompt("Enter the number of rows for the palindrome triangle:")
);

// Print the palindrome triangle
printPalindromeTriangle(numRows);
