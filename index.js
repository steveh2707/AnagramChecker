#!/usr/bin/env node

import anagramChecker from "./anagramChecker.js";

const args = process.argv.slice(2);

console.log(anagramChecker(args));
