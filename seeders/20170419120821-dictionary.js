'use strict';
const fs = require('fs');
var model = require('../models');
var dictionary = fs.readFileSync('./db/fixtures/words.txt').toString();
let wordsArr = dictionary.split('\n');
let data = [];
for (var i = 0; i < wordsArr.length; i++) {
  let object = {
    word:wordsArr[i],
    createdAt:new Date().toISOString(),
    updatedAt:new Date().toISOString()
  };
  data.push(object);
}

module.exports = {
  up: function (queryInterface, Sequelize) {
      console.log(data);
      return queryInterface.bulkInsert('Words', data, {});
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
