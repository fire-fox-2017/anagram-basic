'use strict';
var models = require('../models/index');
var util = {};
util.anagrams = function(input, callback) {
  models.Word.findAll()
    .then((allwords) => {
      // get word only
      let words = [];
      allwords.forEach((word) => {
        words.push(word.words)
      })
      // sort all words
      let sortWords = [];
      words.forEach(word => {
        sortWords.push(word.split('')
          .sort()
          .join(''))
      })
      let target = input.split("")
        .sort()
        .join("")
        .trim();
      let indices = [];
      let idx = sortWords.indexOf(target);
      while (idx != -1) {
        indices.push(words[idx]);
        idx = sortWords.indexOf(target, idx + 1); //element , checkPosIndexElementnya
      }
      callback(words, indices)
    })
}
module.exports = util;
