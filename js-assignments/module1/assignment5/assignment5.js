
'use strict';

const year = Number(prompt("Enter a year:"));
let isLeap = false;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  isLeap = true;
}

const result = isLeap
  ? `${year} is a leap year.`
  : `${year} is not a leap year.`;

document.body.innerHTML = `<p>${result}</p>`;
