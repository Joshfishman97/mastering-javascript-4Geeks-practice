function select(arr, para2) {
    var newObject = {};
    for (var key in para2) {
        console.log(key, para2[key])
if(arr.includes(key)){
    newObject[key] = para2[key]
}
    }
    return newObject;
}
var arr = ['a', 'c', 'e'];
var obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
};
var output = select(arr, obj);
console.log(output);