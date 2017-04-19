'use strict';

var models = require('../models/index');
var util = {};

util.anagrams = function(source, callback){
  models.Word.findAll()
    .then((allwords) => {
      // get word only
      let words = [];
      allwords.forEach((word) => {
        // console.log(word.name);
        words.push(word.name)
      })
      // sort all words
      let sortWords = [];
      words.forEach(word => {
        // console.log(word);
        sortWords.push(word.split('')
          .sort()
          .join(''))
      })
      let target = source.split("")
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
