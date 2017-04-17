module.exports = {
  anagrams : function(a, b) {
    let sortWords = [];
    a.forEach(word=>{
      sortWords.push(word.split('').sort().join(''))
    })
    console.log(sortWords)
    let y = b.split("").sort().join("").trim(),
        z = sortWords.indexOf(y);
    return z !== -1 ? a[z] : "not found";
  }
}
