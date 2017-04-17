module.exports = {
  anagrams : function(a, b) {
    let sortWords = [];
    a.forEach(word=>{
      sortWords.push(word.split('').sort().join(''))
    })
    let y = b.split("").sort().join("").trim();
    let indices = [];
    let idx = sortWords.indexOf(y);
    while (idx != -1) {
      indices.push(sortWords[idx]);
      idx = sortWords.indexOf(y, idx + 1); //element , checkPosIndexElementnya
    }
    return indices.join(" ")
  }
}
