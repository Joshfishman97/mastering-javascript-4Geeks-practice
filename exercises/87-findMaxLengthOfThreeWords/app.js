function findMaxLengthOfThreeWords(word1,word2,word3){
    let myArray = [word1,word2,word3];
    let smallestLengthFound = 0
    for(let i = 0; i<myArray.length; i++){
        if(myArray[i].length>smallestLengthFound){
           smallestLengthFound = myArray[i].length;
        }
       
    }
    return smallestLengthFound;
}

var output = findMaxLengthOfThreeWords('a', 'be', 'see');
console.log(output);