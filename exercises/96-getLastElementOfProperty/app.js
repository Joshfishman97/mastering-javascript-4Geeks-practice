function getLastElementOfProperty(obj,key){
    let newArray = obj[key]
    if(typeof newArray === 'object' || newArray!=[]){
        for(let i = 0; i<newArray.length; i++){
            let newArray1 = newArray[i]
        }
        return newArray[newArray.length-1]
    }
}


var obj = {
    key: [1, 2, 5]
  };
  var output = getLastElementOfProperty(obj, 'key');
  console.log(output); 