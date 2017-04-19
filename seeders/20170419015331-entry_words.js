'use strict';

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

    var fs = require('fs');

    var file = "./db/fixtures/words"
    let data = fs.readFileSync(file)
    .toString()
    .split("\n");

    console.log(data.length);
    // console.log(JSON.parse(data));

    let words_list = [];

    for (let i = 0 ; i < data.length ; i++) {
      let word = { word: data[i], createdAt: new Date(), updatedAt: new Date() };
      words_list.push(word);
    }

    console.log("here")
    // var list = JSON.parse(data);
    console.log("Seeders",words_list);
    console.log("****** end of seeder ");


    // bulkInsert here
    return queryInterface.bulkInsert('Words', words_list, {});



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
