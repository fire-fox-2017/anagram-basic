var express = require('express');
var router = express.Router();
var helper = require('../helpers/util');

/* GET home page. */

router.get('/', function(req, res, next) {
    var word = req.query.word;
    console.log(word);
    // release 2
    // res.render('index', {title: 'Anagrams', word: word, anagrams: {} });

    // release 3
    if(word===undefined){
      let source ='';
      let data=[{words:''}];
      res.render('index', {
          title: 'Anagrams',
          word: source,
          anagrams: data
      });

    }else{
      helper.anagrams(word, function(source, data) {
          res.render('index', {
              title: 'Anagrams',
              word: source,
              anagrams: data
          });
      });

    }


});

// router.post('/', function(req, res, next) {
//     var word = req.body.word;
//     console.log(word);
//     helper.anagrams(word, function(source, data) {
//         res.render('index', {
//             title: 'Anagrams',
//             word: source,
//             anagrams: data
//         });
//     });
//
// });



module.exports = router;
