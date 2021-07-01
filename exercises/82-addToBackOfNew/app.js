function addToBackOfNew(arr1,element1){
    let arrayOne = [];
    for(let i = 0; i<arr1.length; i++){
        arrayOne.push(arr1[i])
    }
    arrayOne.push(element1)
    
    return arrayOne
    
}
var input = [1, 2];
var output = addToBackOfNew(input, 3);
console.log(input);
console.log(output);