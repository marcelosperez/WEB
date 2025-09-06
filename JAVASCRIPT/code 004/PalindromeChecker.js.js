/*
The "Palindrome Checker" teaches about strings, loops, and conditionals, 
and is a common coding interview problem.
cleaned.split('') splits the cleaned string into an array of characters
Example: "abc" → ["a", "b", "c"]
.reverse() reverses the order of the array
Example: ["a", "b", "c"] → ["c", "b", "a"]
.join('') joins the array back into a single string
Example: ["c", "b", "a"] → "cba"
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