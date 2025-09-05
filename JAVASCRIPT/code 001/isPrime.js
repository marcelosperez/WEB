// Function to check if a number is prime
function isPrime(num) {
  // Prime numbers must be greater than 1
  if (num <= 1) {
    return false;
  }
  // Check for divisors from 2 up to the square root of the number
  // The loop only needs to go up to the square root because if a number has a divisor greater 
  // than its square root, it must also have a divisor smaller than its square root.
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      // If the number is divisible by any other number, it's not prime
      return false;
    }
  }
  // If no divisors are found, the number is prime
  return true;
}
// Example usage:
const num1 = 17;
const num2 = 18;
console.log(`${num1} is a prime number: ${isPrime(num1)}`);
console.log(`${num2} is a prime number: ${isPrime(num2)}`);
// Expected output: 17 is a prime number: true; 18 is a prime number: false