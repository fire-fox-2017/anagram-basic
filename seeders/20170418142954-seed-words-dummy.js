'use strict';
var fs = require('fs');
module.exports = {
  up: function(queryInterface, Sequelize) {
    let temp = fs.readFileSync('./db/fixtures/words').toString().split("\n");
    let arrTemp = [];
    for (let i = 0; i < temp.length; i++) {
      arrTemp.push({
        words: temp[i],
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }
    return queryInterface.bulkInsert('Words', arrTemp, {});
  },

  down: function(queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
