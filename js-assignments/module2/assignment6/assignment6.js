

'use strict';

function roll() {
  return Math.floor(Math.random() * 6) + 1;
}

let ul = document.getElementById('list');
let num = 0;

while (num !== 6) {
  num = roll();
  let li = document.createElement('li');
  li.textContent = "Rolled: " + num;
  ul.appendChild(li);
}
