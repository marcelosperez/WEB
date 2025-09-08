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
  let cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let reversed = cleaned.split('').reverse().join('');
  let result = cleaned === reversed;
  console.log(`Is "${str}" a palindrome? -> ${result}`);
  return result;
}

// Example usage:
isPalindrome("A man, a plan, a canal: Panama"); // Is "A man, a plan, a canal: Panama" a palindrome? -> true
isPalindrome("hello"); // Is "hello" a palindrome? -> false
