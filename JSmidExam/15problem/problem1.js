function calculateStrikeRate(runs, balls) {
  // Ensure the inputs are valid numbers
  if (isNaN(runs) || isNaN(balls)) {
    return "Invalid input. Please provide valid numbers.";
  }

  // Ensure balls is a positive number
  if (balls <= 0) {
    return "Invalid input. Number of balls should be greater than zero.";
  }

  // Calculate Strike Rate
  const strikeRate = (runs / balls) * 100;

  return strikeRate.toFixed(2);
}

// Example usage:
console.log(calculateStrikeRate(45, 30)); // Output: 150.00
console.log(calculateStrikeRate(100, 60)); // Output: 166.67
console.log(calculateStrikeRate(25, 40)); // Output: 62.50
