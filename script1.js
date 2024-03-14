// reverse a string
function reverseString(str) {
  let revStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revStr = revStr + str[i];
  }
  return str;
}
// count characters
function countCharacters(str) {
  return str.length;
}
// capitalize words
function capitalizeWords(sentence) {
  let capitalizedSentence = "";
  let capitalizeNext = true;
  for (i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " " && capitalizeNext) {
      capitalizedSentence += sentence[i].toUpperCase();
      capitalizeNext = false;
    } else {
      capitalizedSentence += sentence[i];
    }
    if (sentence[i] === " ") {
      capitalizeNext = true;
    }
  }
  return capitalizedSentence;
}

// find maximum and minimum:
function findMaximum(arr) {
  return Math.max(...arr);
}

function findMinimum(arr) {
  return Math.min(...arr);
}
// sum of array
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
// filter array
function filterArray(arr) {
  return arr.filter((item) => typeof item === "number");
}
// factorial
function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}
// prime
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
// fibonacci
function fibonacciSequence(num) {
  let fibArr = [0, 1];
  let a = 0;
  let b = 1;
  for (let i = 2; i < num; i++) {
    const next = a + b;
    fibArr.push(next);
    a = b;
    b = next;
  }
  return fibArr;
}
