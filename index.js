// helpers.js

// Function: divide
// Parameters: dividend (Number), divisor (Number)
// Returns: Result of dividing dividend by divisor
function divide(dividend, divisor) {
    return dividend / divisor;
  }
  
  // Arrow Function: square
  // Parameters: num (Number)
  // Returns: Square of the input number
  const square = (num) => {
    return num * num;
  };
  
  // Arrow Function: add
  // Parameters: a (Number), b (Number)
  // Returns: Sum of a and b
  const add = (a, b) => {
    return a + b;
  };
  
  // Exporting functions to be accessible in other files (like test files)
  module.exports = {
    divide,
    square,
    add
  };
  