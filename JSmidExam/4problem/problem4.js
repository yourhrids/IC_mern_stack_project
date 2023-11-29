function calRunRate(currentRun, requiredRun, remainingOver) {
  // Ensure the inputs are valid numbers
  if (isNaN(currentRun) || isNaN(requiredRun) || isNaN(remainingOver)) {
    return "Invalid input. Please provide valid numbers.";
  }

  // Ensure remainingOver is a positive number
  if (remainingOver <= 0) {
    return "Invalid input. Remaining overs should be greater than zero.";
  }

  // Calculate Required Run Rate
  const requiredRunRate = (requiredRun - currentRun) / remainingOver;
  return requiredRunRate.toFixed(2);
}

// Example usage:
const currentRun = 120;
const requiredRun = 250;
const remainingOver = 25;

const requiredRunRate = calRunRate(currentRun, requiredRun, remainingOver);
console.log(`Required Run Rate: ${requiredRunRate} runs per over`);
