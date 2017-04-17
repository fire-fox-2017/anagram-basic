var express = require('express');
var router = express.Router();
var helper = require('../helpers/util')
var models = require('../models')

/* GET home page. */
router.get('/', function(req, res, next) {
    let input = req.query.word || 'words';
    //let testArray = 'anagrams' in helper.util;
    //res.send(testArray)
    helper.anagrams(input, (source, result)=>{
      res.render('index', { alldata : source, output: result || '??', input : input || 'word'})
    });
});

module.exports = router;
