function findMinLengthOfThreeWords(word1, word2, word3) {
    var smallestWordFound = "aatjaahagajajaghakagahakagja";
    let words = [word1,word2,word3]
    words.forEach(function(item,index,arr){
        if(item.length<smallestWordFound.length){
            smallestWordFound=item
        }
    })

   
    return smallestWordFound.length;
}

var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1