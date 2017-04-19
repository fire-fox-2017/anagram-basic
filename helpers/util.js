'use strict';

var models = require('../models/word');
var db = require('../models');
var util = {};

function simplify(word) {
  let simple = '';
  for(var i = 0; i < word.length; i++) {
    if (/[^\']/.test(word[i])) {
      simple += word[i].toLowerCase();
    }
  }
  return simple.split('').sort().join('');
}

util.anagrams = function(source, callback){
  let word1 = simplify(source);
  let data = [], dictionary = [];
  db.Word.findAll()
  .then(words => {
    words.forEach(word => {
      if (word1 === simplify(word.word)) {
        data.push(word.word);
      }
      dictionary.push(word.word);
    });
    callback(dictionary, data);
  });

}

module.exports = util;
