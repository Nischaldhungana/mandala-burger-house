'use strict';

const rolls = Number(prompt("How many dice do you want to roll?"));
let sum = 0;

for (let i = 0; i < rolls; i++) {
  sum += Math.floor(Math.random() * 6) + 1;
}

document.body.innerHTML = `<p>You rolled ${rolls} dice. Total sum: ${sum}</p>`;
