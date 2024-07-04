function checkIfPangram(str){
   let charSet = new Set();
   for(let character of str){
    charSet.add(character);
   }
   if(charSet.size ===26){
    console.log(charSet.size, charSet)
    return true
   }else{
    console.log(charSet.size, charSet)
    return false;
   }

}

console.log(checkIfPangram('thequickbrownfoxjumpsoverthelazydog'));
console.log(checkIfPangram('leetcode'));
