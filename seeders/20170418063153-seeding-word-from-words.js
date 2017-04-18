'use strict';
var fs = require('fs');
module.exports = {
    up: function(queryInterface, Sequelize) {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkInsert('Person', [{
            name: 'John Doe',
            isBetaMember: false
          }], {});
        */
        // let provideDataJson = ()=>{
        //   console.log('test');
        //   fs.readFile('words', (err, data) => {
        //       if (err) throw err;
        //       console.log(data.toString().split("\n"));
        //       console.log('test2');
        //   });
        //
        //
        // }
        // provideDataJson()
        let jsonData = [];
        let data = fs.readFileSync('/media/ivan/Work Hard/Hacktiv8/Phase1/Week4/Day1/anagram-basic/db/fixtures/words').toString().split("\n");
        for (let i = 0; i < data.length; i++) {
            jsonData.push({
                words: data[i],
                createdAt:new Date(),
                updatedAt:new Date()
            })
        }
        return queryInterface.bulkInsert('Words', jsonData, {});

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
