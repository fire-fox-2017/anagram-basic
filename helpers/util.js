'use strict';

var models = require('../models/index');
var util = {};
const db = require('../models');

util.anagrams = function(source, callback){
  var word = source.toLowerCase().split('').sort().join('').trim();


  //{where: {length(word)= ${word.length}}})
  db.Words.findAll()
  .then ( words => {
    console.log(`===> util `);
    // console.log(words);

    let data = [];
    words.forEach( w => {
      if( word.length == w.word.length) {
        // if length are the same, then format the letter in w just like we did on source word
        var other = w.word.toLowerCase().split('').sort().join('').trim();
        // console.log(`---- w='${w.word}'`)

        // and compare
        if( word === other)
          data.push(w);
      }
    })

    callback(source, data);
  })
}

module.exports = util;
