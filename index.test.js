import anagramChecker from "./anagramChecker.js";

// check equal length
anagramChecker(["StephenHanna", "chicken", "dinner"]);
// check for anagram
anagramChecker(["StephenHanna", "elbow", "below"]);
// check for number
anagramChecker(["StephenHanna", "elbow1", "below"]);
// check for special character
anagramChecker(["StephenHanna", "elbow", "belo%w"]);
// check for missing input
anagramChecker(["StephenHanna", "elbow"]);
