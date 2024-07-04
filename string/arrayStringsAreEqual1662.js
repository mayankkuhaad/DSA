var arrayStringsAreEqual = function(word1, word2) {
    let w1= '';
    let w2= '';
    for(let i of word1){
        w1 += i
    }
    for(let i of word2){
        w2 += i
    }
   return w1===w2
};
console.log(arrayStringsAreEqual(["ab", "c"], ["1a", "bc"]));