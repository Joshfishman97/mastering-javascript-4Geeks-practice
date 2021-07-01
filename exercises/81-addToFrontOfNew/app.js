function addToFrontOfNew(arr1,element1){
let newArray = [];
newArray.push(element1)
for(let i = 0; i<arr1.length; i++){
newArray.push(arr1[i])
}
return newArray;
}

var input = [1, 2];
var output = addToFrontOfNew(input, 3);
console.log(output);
 