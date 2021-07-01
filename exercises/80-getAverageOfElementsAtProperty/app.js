function getAverageOfElementsAtProperty(obj, key) {
    if (obj[key] === undefined) {
        return 0;
    }
    else if (!(Array.isArray(obj[key]))) {
        return 0;
    }
    else if(obj[key].length===0){return 0;}
    else {
        var total = 0;
        for (var i = 0; i < obj[key].length; i++) {
            total += obj[key][i];
        }
        var avg = total / obj[key].length;
        return avg
    }
}



var obj = {
    key: [1, 2, 3]
};
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output);
