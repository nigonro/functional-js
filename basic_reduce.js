'use strict';

function countWords(inputWords) {
  let wordCount = {};

  return inputWords.reduce((wordCount, word) => {
    wordCount[word] = ++wordCount[word] || 1;
    return wordCount;
  }, wordCount);
}

module.exports = countWords;
