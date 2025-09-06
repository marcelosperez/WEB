/*
FizzBuzz is a classic programming interview question. 
The task: print numbers from 1 to 100, but for multiples 
of three print "Fizz" instead of the number, for multiples 
of five print "Buzz", and for multiples of both three and 
five print "FizzBuzz".
*/

let count = 1;

function fizzBuzz() {
  if (count % 3 === 0 && count % 5 === 0) {
    console.log("FizzBuzz");
  } else if (count % 3 === 0) {
    console.log("Fizz");
  } else if (count % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(count);
  }
  count++;
}

while (count <= 100) {
  fizzBuzz();
}