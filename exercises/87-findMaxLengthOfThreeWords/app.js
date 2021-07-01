function findMaxLengthOfThreeWords(word1,word2,word3){
    let myArray = [word1,word2,word3];
    let result = 0
    for(let i = 0; i<myArray.length; i++){
        if(myArray.length>result){
            result = myArray[i].length;
        }
        console.log(myArray)
    }
    return result;
}

var output = findMaxLengthOfThreeWords('a', 'be', 'see');
console.log(output);