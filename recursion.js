//exponent function
const power = (base, exponent) => {
  if (exponent === 0) return 1;

  return base * power(base, exponent - 1);
};

//factorial function
const factorial = (base) => {
  if (base <= 1) return 1;

  return base * factorial(base - 1);
};

//funtion that multiples all members of an array together
const productOfArray = (arr) => {
  if (arr.length === 1) return arr[0];

  return arr[0] * productOfArray(arr.slice(1));
};

//accepts a num and adds all numbers from 0 to that num
const recursiveRange = (num) => {
  if (num === 0) return 0;

  return num + recursiveRange(num - 1);
};

//function that gives the nth number of the fibonacci sequence
const fib = (num) => {
  if (num <= 2) return 1;

  return fib(num - 1) + fib(num - 2);
};

//function that accepts a string and prints all the letters in reverse
const reverse = (str) => {
  if (str.length <= 1) return str;
  return str[str.length - 1] + reverse(str.slice(0, str.length - 1));
};

//function that checks if a passed string is a palindrome
const isPalindrome = (str) => {
  if (str.length === 2) return str[0] === str[1];
  if (str.length <= 1) return true;

  return (
    str[0] === str[str.length - 1] && isPalindrome(str.slice(1, str.length - 1))
  );
};

//function that takes an array and a callback. the function returns true if a single value in the array
//returns true to the callback. Otherwise it returns false

const isOdd = (val) => val % 2 !== 0;

const someRecursive = (arr, callBack) => {
  if (arr.length === 0) return false;

  return callBack(arr[0]) || someRecursive(arr.slice(1), callBack);
};
// console.log(someRecursive([1, 2, 3, 4], isOdd));
// console.log(someRecursive([4, 6, 8, 9], isOdd));
// console.log(someRecursive([4, 6, 8], isOdd));

//function that takes an array of numbers and arrays and flattens it into one array of numbers

const flatten = (arr) => {
  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArray = newArray.concat(flatten(arr[i]));
    } else newArray.push(arr[i]);
  }
  return newArray;
};

// console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]); // [1, 2, 3, 4, 5]
// flatten([[1], [2], [3]]); // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]); // [1,2,3

//function that takes an array of strings and returns an array with the first letter of each string capitalized
const capitalizeFirst = (arr) => {
  if (arr.length === 1) return arr[0].charAt(0).toUpperCase() + arr[0].slice(1);
  let newArray = [];
  newArray.push(arr[0].charAt(0).toUpperCase() + arr[0].slice(1));
  newArray = newArray.concat(capitalizeFirst(arr.slice(1)));
  return newArray;
};
console.log(capitalizeFirst(['awesome', 'test', 'taco']));

//function that takes an array of strings and returns an array with each string capitalized

const capitalizeWords = (arr) => {
  if (arr.length === 1) return arr[0].toUpperCase();
  let newArray = [];
  newArray.push(arr[0].toUpperCase());
  newArray = newArray.concat(capitalizeWords(arr.slice(1)));
  return newArray;
};

console.log(capitalizeWords(['i', 'am', 'learning', 'recursion']));

//function that takes an object that may contain nested objects and returns the sum of all even numbers found within

const nestedEvenSum = (obj) => {
  let total = 0;
  for (let key of Object.keys(obj)) {
    if (typeof obj[key] === 'number' && obj[key] % 2 === 0) total += obj[key];
    if (typeof obj[key] === 'object') total += nestedEvenSum(obj[key]);
  }
  return total;
};
console.log(
  nestedEvenSum({ test: 1, no: 2, obj: { testing: 1, nah: 2, ok: { hmm: 4 } } })
);

//takes an object and returns an object with all the numbers from that obj converted to string
const stringifyNumbers = (obj) => {
  let newobj = {};
  for (let key of Object.keys(obj)) {
    if (typeof obj[key] === 'number') newobj[key] = obj[key].toString();
    else if (Array.isArray(obj[key])) newobj[key] = obj[key];
    else if (typeof obj[key] === 'object') {
      newobj[key] = stringifyNumbers(obj[key]);
    } else newobj[key] = obj[key];
  }
  return newobj;
};

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};
console.log(stringifyNumbers(obj));

//takes an object and returns an array of all the string values in the obj

const collectStrings = (obj) => {
  let total = [];
  for (let key of Object.keys(obj)) {
    if (typeof obj[key] === 'string') total.push(obj[key]);
    if (typeof obj[key] === 'object')
      total = total.concat(collectStrings(obj[key]));
  }
  return total;
};
