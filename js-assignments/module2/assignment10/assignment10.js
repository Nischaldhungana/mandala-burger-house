
'use strict';

let count = Number(prompt("How many candidates?"));
let candidates = [];

for (let i = 0; i < count; i++) {
  let name = prompt("Name for candidate " + (i + 1));
  candidates.push({ name: name, votes: 0 });
}

let voters = Number(prompt("How many voters?"));

for (let i = 0; i < voters; i++) {
  let vote = prompt("Voter " + (i + 1) + ", who do you vote for?");
  let found = candidates.find(c => c.name === vote);
  if (found) {
    found.votes += 1;
  }
}

candidates.sort((a, b) => b.votes - a.votes);
let winner = candidates[0];

console.log("The winner is " + winner.name + " with " + winner.votes + " votes.");
console.log("results:");
for (let c of candidates) {
  console.log(c.name + ": " + c.votes + " votes");
}
