//do a 99 bottles challenge using functions
function sing99Bottles(startingBottles) {
  for (let i = startingBottles; i >= 0; i--) {
    if (i > 0) {
      console.log(`${i} bottle${i > 1 ? 's' : ''} of beer on the wall, ${i} bottle${i > 1 ? 's' : ''} of beer.`);
      console.log(`Take one down and pass it around, ${i - 1} bottle${i - 1 === 1 ? '' : 's'} of beer on the wall.`);
    } else {
      console.log('No more bottles of beer on the wall, no more bottles of beer.');
      console.log(`Go to the store and buy some more, ${startingBottles} bottle${startingBottles > 1 ? 's' : ''} of beer on the wall.`);
    }
  }
}

// ...existing code...
sing99Bottles(99);
// ...existing code...