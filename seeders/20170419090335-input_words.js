'use strict';
let fs = require('fs')

let model = require('../models')

let wordsToStr = fs.readFileSync('./db/fixtures/words.txt').toString()
let arr = wordsToStr.split("\n")
module.exports = {
  up: function (queryInterface, Sequelize) {
    let words = []
    for(let i = 0; i < arr.length; i+=150){
      let obj = {}
      obj['name'] = arr[i],
      obj['createdAt'] = new Date(),
      obj['updatedAt'] = new Date()
      words.push(obj)
    }
    return queryInterface.bulkInsert('Words', words, {});

  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('Words', null, {});

  }
};
