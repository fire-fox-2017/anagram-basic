var express = require('express');
var router = express.Router();
var helper = require('../helpers/util');

/* GET home page. */

router.get('/', function(req, res, next) {
  var word = req.query.words;
  if (word === undefined) {
    res.render('index', {
      title: 'Anagrams',
      word: '',
      results: [{
        word: ''
      }]
    });
  } else {
    helper.anagrams(word, function(source, data) {
      console.log(data);
      res.render('index', {
        title: 'Anagrams',
        word: source,
        results: [{
          word: ''
        }]
      });
    });
  }
});

module.exports = router;
