const fs = require('fs');
const Word = require('../../models').Word;


fs.readFile('words', (err, data) => {
  if(err) {
      console.log(err);
    } else {
      console.log('seeding data from file to database');
      let raw = String(data);
      let wordArr = [];
      let word = "";
      for(let i = 0; i < raw.length; i++) {
        if (/[a-z']/ig.test(raw[i])) {
          word = word + String(raw[i]);
        } else {
          wordArr.push(word);
          word = "";
        }
      }
      for (let i = 90001; i < wordArr.length-40; i++) {
        // console.log(wordArr[i]);
        Word.create({word: wordArr[i], createdAt: new Date(), updatedAt: new Date()})
          .then((data) => {
            console.log(wordArr[i]);
          }).catch((err) => {
            console.log(err);
          });
      }
    }
  });













// function getWords(file) {
//   return new Promise(function(resolve, reject) {
//     fs.readFile(file, (err, data) => {
//       if(err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
  // .then((data) => {
  //   console.log('Assigning file to array..');
  //   let raw = String(data);
  //   let wordArr = [];
  //   let word = "";
  //   for(let i = 0; i < raw.length; i++) {
  //     if (/[a-z']/ig.test(raw[i])) {
  //       word = word + String(raw[i]);
  //     } else {
  //       wordArr.push(word);
  //       word = "";
  //     }
  //   }
  //   console.log('File has been assigned to an array..')
  //   return wordArr;
  // }).catch((err) => {
  //   console.log(err);
  // });
// }

// function getWords(file) {
//   return new Promise(function(resolve, reject) {
//     fs.readFile(file).then((data) => console.log(data)).catch((err) => {console.log(err)});
//   });
// }


// let file = 'words';
// getWords('words').then((data) => {
//   console.log(data.length);
  // for (let i = 0; i < data.length; i++) {
  //   console.log(String(data[i]));
  // }
// }).catch((err) => {console.log(err)});

// let words = getWords(file).then((data) => {
//   console.log('Assigning file to array..');
//   let raw = String(data);
//   let wordArr = [];
//   let word = "";
//   for(let i = 0; i < raw.length; i++) {
//     if (/[a-z']/ig.test(raw[i])) {
//       word = word + String(raw[i]);
//     } else {
//       wordArr.push(word);
//       word = "";
//     }
//   }
//   console.log('File has been assigned to an array..')
//   return wordArr;
//   }).catch((err) => {console.log(err)});
//
//
// console.log(words);
