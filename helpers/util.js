'use strict';

var Word = require('../models/index').Word;

var util = {
  anagrams : function(source, callback) {
    if (source) {
      let data = [];
      let sourceLetters = source.toLowerCase().split("").sort().join("");
      Word.findAll().then((words) => {
        words.forEach((wordObj) => {
          let word = wordObj.word;
          if (word.length === source.length) {
            let checkWord = word.toLowerCase().split("").sort().join("");
            if (checkWord === sourceLetters) {
              data.push(word);
            }
          }
        });
        callback(source, data);
      }).catch((err) => {
        callback(err);
      });
    } else {
      callback(null);
    }

  }
};


module.exports = util;
