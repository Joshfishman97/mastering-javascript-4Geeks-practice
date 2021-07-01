function findMinLengthOfThreeWords(word1, word2, word3) {
    var result = 100;
    var newArray = [word1, word2, word3];
    for (var i = 0; i < newArray.length; i++) {
        if (newArray[i].length < result) {
            result = newArray[i].length
        }
    }
    console.log(newArray)
    return result;
}

var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1