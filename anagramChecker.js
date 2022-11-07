import { readFile, writeFile } from "fs/promises";

const anagrams = JSON.parse(await readFile("./anagramStore.json"));

function anagramChecker(args) {
  // check whether all inputs have been included
  if (args[0] == null || args[1] == null || args[2] == null) {
    return "include all inputs";
  }

  const inputs = {
    userName: args[0],
    word1: args[1].toLowerCase(),
    word2: args[2].toLowerCase(),
  };

  // check whether input contains numbers
  if (/\d/.test(inputs.word1) || /\d/.test(inputs.word2)) {
    return "no numbers allowed";
  }

  // check whether input contains spaces
  if (/\s/.test(inputs.word1) || /\s/.test(inputs.word2)) {
    return "no spaces allowed";
  }

  // check whether input contains special characters
  if (
    /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(inputs.word1) ||
    /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(inputs.word2)
  )
    return "no special characters allowed";

  // check whether words are the same
  if (inputs.word1 == inputs.word2) {
    return "these words are the same";
  }

  // check words are equal length
  if (inputs.word1.length != inputs.word2.length) {
    return (
      inputs.word1 +
      " and " +
      inputs.word2 +
      " are not of equal length and therefore cannot be anagrams"
    );
  }

  // check whether words are anagrams

  // first check anagrams array for word pair
  for (let i = 0; i < anagrams.length; i++) {
    if (anagrams[i].word1 == inputs.word1) {
      if (anagrams[i].word2 == inputs.word2) {
        return (
          inputs.word1 +
          " and " +
          inputs.word2 +
          " are an anagram and already exist in cache"
        );
      }
    }
    if (anagrams[i].word2 == inputs.word1) {
      if (anagrams[i].word1 == inputs.word2) {
        return (
          inputs.word1 +
          " and " +
          inputs.word2 +
          " are an anagram and already exist in cache"
        );
      }
    }
  }

  // words not found in anagrams array are assessed

  // letters in each word are sorted into alphabetical order
  let sortedWord1 = inputs.word1.split("").sort().join("");
  let sortedWord2 = inputs.word2.split("").sort().join("");

  // words with letters sorted alphabetically are compared to eachother. If equal, words are anagrams and appeneded to the anagrams array and written to file
  if (sortedWord1 == sortedWord2) {
    // append new anagram to anagram array
    anagrams.push({
      userName: inputs.userName,
      word1: inputs.word1,
      word2: inputs.word2,
    });
    // write anagram array to file
    writeFile("./anagramStore.json", JSON.stringify(anagrams), function (err) {
      if (err) return err;
    });
    // return message to be displayed on console
    return inputs.word1 + " and " + inputs.word2 + " are an anagram";
  } else {
    return inputs.word1 + " and " + inputs.word2 + " are not an anagram";
  }
}

export default anagramChecker;
