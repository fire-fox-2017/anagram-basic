var express = require('express');
var router = express.Router();
var helper = require('../helpers/util');

/* GET home page. */

router.get('/', function(req, res, next) {
    let input = req.query.word || 'words';
    //let testArray = 'anagrams' in helper.util;
    //res.send(testArray)
    helper.anagrams(input, (source, result)=>{
      res.render('anagram.ejs', { alldata : source, output: result || '??', input : input || 'word'})
    });
});

// router.get('/', function(req, res, next) {
//   var word = req.query.word;
//
//   // release 2
//   res.render('index', {title: 'Anagrams', word: word, anagrams: {} });
//
//   // release 3
//   // helper.anagrams(word, function(source, data){
//   //   res.render('index', { title: 'Anagrams', word: source, anagrams: data });
//   // });
//
// });

module.exports = router;
