import anagramChecker from "./anagramChecker.js";

// check equal length - expect chicken and dinner are not of equal length and therefore cannot be anagrams
let response1 = anagramChecker(["StephenHanna", "chicken", "dinner"]);
console.log(response1);

// check for anagram - expect elbow and below are an anagram and already exist in cache
let response2 = anagramChecker(["StephenHanna", "elbow", "below"]);
console.log(response2);

// check for number - expect no numbers allowed
let response3 = anagramChecker(["StephenHanna", "elbow1", "below"]);
console.log(response3);

// check for special character - expect no special characters allowed
let response4 = anagramChecker(["StephenHanna", "elbow", "belo%w"]);
console.log(response4);

// check for missing input - expect include all inputs
let response5 = anagramChecker(["StephenHanna", "elbow"]);
console.log(response5);

// check for same input - expect these words are the same
let response6 = anagramChecker(["StephenHanna", "elbow", "elbow"]);
console.log(response6);

let response7 = anagramChecker(["StephenHanna", "spot", "pots"]);
console.log(response7);
