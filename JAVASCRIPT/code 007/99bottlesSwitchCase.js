class Bottles {
  song() {
    return this.verses(99, 0);
  }

  verses(upper, lower) {
    return downTo(upper, lower)
      .map(i => this.verse(i))
      .join('\n');
  }

  verse(number) {
    switch (number) {
      case 0:
        return 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
      case 1:
        return '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n';
      case 2:
        return '2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n';
      default:
        return `${number} bottles of beer on the wall, ${number} bottles of beer.\nTake one down and pass it around, ${number - 1} bottles of beer on the wall.\n`;
    }
  }
}

function downTo(upper, lower) {
  const numbers = [];
  for (let i = upper; i >= lower; i--) {
    numbers.push(i);
  }
  return numbers;
}

const bottles = new Bottles();
console.log(bottles.song());