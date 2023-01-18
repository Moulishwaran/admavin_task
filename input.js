// Problem 1 - Swapping Min Max

const minmax = (a, b) => {
  let min = a[0] * b[0];

  for (let i = 0; i < a.length; i++) {
    let current = Math.max(a[i] * b[i], b[i] * a[i]);
    if (current < min) min = current;
  }

  return min;
};

// Problem 2 - Possible Three Letter String

let inputString = "ABC";
let outputStrings = [];

function findAllStrings(string) {
  let stringArray = string.split("");

  for (let i = 0; i < stringArray.length; i++) {
    for (let j = 0; j < stringArray.length; j++) {
      for (let k = 0; k < stringArray.length; k++) {
        outputStrings.push(stringArray[i] + stringArray[j] + stringArray[k]);
      }
    }
  }
  return outputStrings.sort();
}

console.log(findAllStrings(inputString));

// Problem 3 - Divisibility Cases

let start = x;
let end = y;

let A = new Set();
let B = new Set();

for (let i = start; i <= end; i++) {
  if (i % 3 == 0) {
    A.add(i);
  }
  if (i % 5 == 0) {
    B.add(i);
  }
}

let o1 = new Set([...A, ...B]);
let o2 = new Set([...A].filter((x) => B.has(x)));
let o3 = new Set([...A].filter((x) => !B.has(x)));
let o4 = new Set([...B].filter((x) => !A.has(x)));

//Problem 5 - String Filtering

function countStrings(list) {
  let alphanumeric = 0;
  let numeric = 0;
  for (let i = 0; i < list.length; i++) {
    const el = list[i];
    if (el.match(/^[a-z0-9]+$/i)) {
      alphanumeric++;
    }
    if (el.match(/^[0-9]+$/i)) {
      numeric++;
    }
  }
  console.log(
    `There are ${alphanumeric} alphanumeric strings and ${numeric} numeric strings in the list.`
  );
}

let list = ["hello", "1234", "abc", "5678"];
countStrings(list);

// Problem 6 - Password Validation

function validatePassword(password) {
  let upperCaseLetters = /[A-Z]/g;
  let specialCharacters = /[!@#$&*$]/g;
  let numbers = /[0-9]/g;

  if (
    password.match(upperCaseLetters) &&
    password.match(specialCharacters) &&
    password.match(numbers)
  ) {
    console.log("Valid");
  } else {
    console.log("Invalid");
  }
}

validatePassword("Abc#123"); // Valid
