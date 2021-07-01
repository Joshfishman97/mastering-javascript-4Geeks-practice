function computeAverageLengthOfWords(word1,word2){
    let A = word1.length +word2.length
    return A/2
}

var output = computeAverageLengthOfWords('code', 'programs');
console.log(output);