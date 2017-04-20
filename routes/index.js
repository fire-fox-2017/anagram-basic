var express = require('express');
var router = express.Router();
var helper = require('../helpers/util')

/* GET home page. */
router.get('/', function(req, res, next) {
  let anagram = req.query.word;
  if(!anagram){
    res.render('index', {title: 'Anagrams', word:'', anagram: []})
  }
  else {
    helper.anagram(anagram,function(source, data){
    res.render('index', {input: anagram, word: source, anagrams: data})
    })
  }
});

module.exports = router;
