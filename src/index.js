import emojipedia from "./emojipedia";

const truncated = emojipedia.map(entry => entry.meaning.substring(0, 100));
console.log(truncated);

var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

function double(x) {
  return x * 2;
}

// NOte foreach does NOT create a new array!!!
// would create new array and push into new array;

const newNumbers = numbers.map(double);
console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.

const filterNumbers = numbers.filter(function(num) {
  return num > 10;
});

console.log(filterNumbers);

// NOte foreach does NOT create a new array!!!
// would create new array and push into new array;

//Reduce - Accumulate a value by doing something to each item in an array.

// roundabout way:
var newNumber = 0;
numbers.forEach(function(currentNumber) {
  newNumber += currentNumber;
});
console.log(newNumber);

var newNumber = numbers.reduce(function(accumulator, currentNumber) {
  console.log(accumulator, currentNumber);
  return accumulator + currentNumber;
});
console.log(newNumber);

// saves having to define the accumulator, I guess!

//Find - find the first item that matches from an array.

var newNum = numbers.find(function(num) {
  return num > 10;
});
console.log(newNum);

//FindIndex - find the index of the first item that matches.
var newNum = numbers.findIndex(function(num) {
  return num > 10;
});
console.log(newNum);
