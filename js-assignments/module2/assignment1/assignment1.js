

'use strict';

let numbers = [];

for (let i = 0; i < 5; i++) {
  let num = Number(prompt("Enter number " + (i + 1)));
  numbers.push(num);
}

for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(numbers[i]);
}
