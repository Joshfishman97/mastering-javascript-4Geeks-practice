function getElementsGreaterThan10AtProperty(obj, key) {
    let newArray = obj[key];
    let answer = [];
    for (let elements in obj[key]) {
        if (newArray.length === []) {
            return [];
        }
        if (newArray[elements].length < 10) {
          return [];
        }
        if (obj[key][elements] ==! []) {
            return [];
        }
        if (obj[key] === undefined) {
            return [];

        }
        else if(newArray[elements]>10){
            answer.push(newArray[elements])
        }
    }
    return answer;
}



    var obj = {
        key: [1, 20, 30]
    };
    var output = getElementsGreaterThan10AtProperty(obj, 'key');
    console.log(output);