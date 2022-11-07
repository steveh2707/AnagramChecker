import anagramChecker from "./anagramChecker.js";

let tests = [
  {
    name: "Test whether equal length validation is working: ",
    inputs: ["StephenHanna", "chicken", "dinner"],
    response:
      "chicken and dinner are not of equal length and therefore cannot be anagrams",
  },
  {
    name: "Test whether anagram existing on file is found: ",
    inputs: ["StephenHanna", "elbow", "below"],
    response: "elbow and below are an anagram and already exist in cache",
  },
  {
    name: "Test whether numbers are rejected: ",
    inputs: ["StephenHanna", "elbow1", "below"],
    response: "no numbers allowed",
  },
  {
    name: "Test whether special characters are rejected: ",
    inputs: ["StephenHanna", "elbow", "belo%w"],
    response: "no special characters allowed",
  },
  {
    name: "Test whether all inputs have been included: ",
    inputs: ["StephenHanna", "elbow"],
    response: "include all inputs",
  },
  {
    name: "Test whether inputs of the same word are rejected: ",
    inputs: ["StephenHanna", "elbow", "elbow"],
    response: "these words are the same",
  },
];

for (let i = 0; i < tests.length; i++) {
  anagramChecker(tests[i].inputs) === tests[i].response
    ? console.log(tests[i].name + "PASS")
    : console.log(tests[i].name + "FAIL");
}
