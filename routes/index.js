var express = require('express');
var router = express.Router();
var helper = require('../helper/util')
var models = require('../models')

/* GET home page. */
router.get('/', function(req, res, next) {
  models.Word.findAll()
  .then((allwords)=>{
    let source = [];
    allwords.forEach((word)=>{
      source.push(word.words)
    })
    let data = req.query.word || 'apa aja';

    let result = helper.anagrams(source, data);
    //res.send({ output: result || '??', input : data})
    //console.log(source)
     res.render('index', { alldata : allwords, output: result || '??', input : data || 'word'})
  })

});

module.exports = router;
