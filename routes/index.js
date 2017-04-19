var express = require('express');
var router = express.Router();
var helper = require('../helpers/util');

/* GET home page. */
router.get('/', function(req, res, next) {
  let word = req.query.word || '';
  helper.anagrams(word, function(source, data) {
    console.log(source)
    res.render('index', {title:'Anagrams', word:word, source:source, anagrams: data});
  });
});

router

module.exports = router;
