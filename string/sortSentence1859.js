var sortSentence = function(s) {
    const words = s.split(' ');
    const sortedWords = new Array(words.length);
    
    words.forEach(word => {
        const position = Number(word[word.length - 1]) ; // Convert char to number
        console.log(position)
        sortedWords[position - 1] = word.slice(0, -1);
    });
    return sortedWords.join(' ');
};

console.log(sortSentence("is2 sentence4 This1 a3"))