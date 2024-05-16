"use strict";

var numbers = [1, 2, 3, 4, 5];
var sumOdd = 0;
numbers.forEach(function (num) {
  if (num % 2 !== 0) {
    sumOdd += num;
  }
});
console.log(sumOdd);