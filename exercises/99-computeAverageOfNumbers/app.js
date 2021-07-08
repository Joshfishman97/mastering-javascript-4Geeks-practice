function computeAverageOfNumbers(numbers){
    let accumlator = 0;
    for(let i =0; i<input.length; i++){
     accumlator= accumlator + numbers[i]
    }
    return accumlator/numbers.length
}

var input = [1,2,3,4,5];
var output = computeAverageOfNumbers(input);
console.log(output)