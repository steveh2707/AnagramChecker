#!/usr/bin/env node

// node --experimental-json-modules index.js StephenHanna friend finder
// node index.js StephenHanna friend finder

import anagramChecker from "./anagramChecker.js";

const args = process.argv.slice(2);

anagramChecker(args);
