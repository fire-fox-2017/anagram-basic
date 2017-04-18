'use strict';

var models = require('../models/index');
var util = {};
var db=require('../models');

function isAnagram(strFirst, strSecond) {

 if(strFirst.length != strSecond.length)
       return false;

 var tempString1 = strFirst.toLowerCase();
 var tempString2 = strSecond.toLowerCase();

 var matched = true ;
 var cnt = 0;
 while(tempString1.length){
    if(tempString2.length < 1)
        break;
    if(tempString2.indexOf(tempString1[cnt]) > -1 )
        tempString2 = tempString2.replace(tempString1[cnt],'');
    else
        return false;

    cnt++;
 }

 return matched ;

 }

util.anagrams = function(source, callback){

  let dictionary=[]
  let anagrams=[]
  db.Words.findAll()
  .then(words=>{
    for (var i = 0; i < words.length; i++) {
      console.log(source+' '+words[i].words);
      if(isAnagram(source,words[i].words)){
        anagrams.push({words:words[i].words})
      }
    }
    // console.log(anagrams);
    callback(source,anagrams)
    // console.log(anagrams);



    // console.log(dictionary);
  })
  .catch(err=>{
    callback(err,'')
  })



}


module.exports = util;
