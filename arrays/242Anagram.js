// 242. Valid Anagram
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.


// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false

 function isAnagram(s,t){
    let charSet = new Map();

    for(let char of s){
        charSet.set(char, (charSet.get(char) || 0) + 1);
    }

    for (let char of t){
        if(!charSet.has(char) || charSet.get(char) === 0){
            return false
        }
        charSet.set(char, charSet.get(char) - 1);

    }

    return true;    
 }

let  s = "anagram", t = "nagaram";
 console.log(isAnagram(s,t))

