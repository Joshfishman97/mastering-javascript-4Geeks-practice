
function getAllElementsButNth(array, n) {
    array.splice(1,1)
    return array;
}

var output = getAllElementsButNth(['a', 'b', 'c'], 1);

console.log(output);
