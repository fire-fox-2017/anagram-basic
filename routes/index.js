var express = require('express');
var router = express.Router();
var helper = require('../helpers/util');

/* GET home page. */

router.get('/', function(req, res, next) {
  var word = req.query.word;
  console.log(word);

  if(!word) {
    // release 2
    res.render('index', {title: 'Anagrams', word: word, anagrams: {} });

  }
  else {
    // release 3
    helper.anagrams(word, function(source, data){

      console.log(`data ${data}`)
      res.render('index', { title: 'Anagrams', word: source, anagrams: data });
    });
  }


});

module.exports = router;
