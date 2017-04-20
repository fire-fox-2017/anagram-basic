'use strict';

var models = require('../models/index');
var util = {};

util.anagrams = function(source, callback) {
  let dictionary = []
  let anagrams = []
  models.Words.findAll()
    .then(words => {
      for (var i = 0; i < words.length; i++) {
        console.log(source + ' ' + words[i].words);
        if (isAnagram(source, words[i].words)) {
          anagrams.push({
            words: words[i].words
          })
        }
      }
      callback(source, anagrams)
    })
    .catch(err => {
      callback(err, '')
    })
}

module.exports = util;
