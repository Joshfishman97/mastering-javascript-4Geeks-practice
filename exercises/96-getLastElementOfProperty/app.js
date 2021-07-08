function getLastElementOfProperty(obj,key){
    let newArray = obj[key]
    let answer = [];
    if(typeof newArray === 'object' || newArray!=[]){
        for(let i = 0; i<newArray.length; i++){
            return newArray[2]
        }
    }
}


var obj = {
    key: [1, 2, 5]
  };
  var output = getLastElementOfProperty(obj, 'key');
  console.log(output); 