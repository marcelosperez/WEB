/*
Here's a classic and educational JavaScript exercise called the "Palindrome Checker." 
It teaches about strings, loops, and conditionals, and is a common coding interview 
problem—just like FizzBuzz.
*/

function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  let cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  // Check if the cleaned string is equal to its reverse
  let reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false