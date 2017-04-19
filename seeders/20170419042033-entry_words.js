'use strict';
const fs = require('fs');

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */


    fs.readFile('../db/fixtures/words', (err, data) => {
      if(err) {
        console.log(err);
      } else {
        console.log('file is assigned to data');
        let raw = String(data);
        let wordArr = [];
        let word = "";
        for(let i = 0; i < raw.length; i++) {
          if (/[a-z']/ig.test(raw[i])) {
            word = word + String(raw[i]);
          } else {
            wordArr.push(queryInterface.bulkInsert('Words', [{word: word}]));
            word = "";
          }
        }
        return wordArr;
      }
    });




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
