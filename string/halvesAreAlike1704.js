var halvesAreAlike = function(s) {
    const n = s.length;
    const half = n / 2;
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let c1 =0 , c2 = 0;
    for(let i = 0; i<half ; i++ ){
        if(vowels.has(s[i])) c1++;
        if(vowels.has(s[i + half])) c2++;
    }

    return c1 === c2
};
    
console.log(halvesAreAlike("book"));