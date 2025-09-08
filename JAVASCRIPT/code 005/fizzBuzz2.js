let count = 1;
let fizzBuzzArr = [];
while (count <= 100) {
  if (count % 3 === 0 && count % 5 === 0) {
    // Add "FizzBuzz" to the array
    fizzBuzzArr.push("FizzBuzz");
  } else if (count % 3 === 0) {
    // Add "Fizz"
    fizzBuzzArr.push("Fizz");
  } else if (count % 5 === 0) {
    // Add "Buzz"
    fizzBuzzArr.push("Buzz");
  } else {
    // Add count
    fizzBuzzArr.push(count);
  }
  count++;
}
// Print the array with the FizzBuzz sequence
console.log(fizzBuzzArr);