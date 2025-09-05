/**
 * Checks if n is a multiple of m.
 * @param {number} n - The number to check.
 * @param {number} m - The potential divisor.
 * @returns {boolean} - True if n is a multiple of m, false otherwise.
 */
function isMultiple(n, m) {
  if (m === 0) {
    // Division by zero is undefined; return false or throw error as needed
    return false;
  }
  if (n % m === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isMultiple(15, 5));

// Example usage:
// isMultiple(15, 5); // returns true
// isMultiple(14, 5); // returns false