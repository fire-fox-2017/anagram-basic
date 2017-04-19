'use strict';
let fs = require('fs')
let model = require('../models')
let wordsInStr = fs.readFileSync('./db/fixtures/words.txt').toString()
let arrword = wordsInStr.split('\n')

module.exports = {
  up: function (queryInterface, Sequelize) {

  //
  //     return queryInterface.bulkInsert('Person', [{
  //       name: 'John Doe',
  //       isBetaMember: false
  //     }], {});
  //
  // },

  let wordData = [];
  for(let i=0; i < 100; i++){
    let obj = {}
    obj['word'] = arrword[i]
    obj['createdAt'] = new Date().toISOString(),
    obj['updatedAt'] = new Date().toISOString()
    wordData.push(obj)
  }

  return queryInterface.bulkInsert('Words',wordData,{});

},

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
