// Write your function here

function getFirstElementOfProperty(obj,key){
    var newArray = obj[key]
    if(typeof newArray === 'object'|| newArray != undefined){
        for(let i = 0; i<newArray.length; i++){
            
        }
        return newArray[0]
    }

}

var obj = {
    key: [1, 2, 4]
  };
  var output = getFirstElementOfProperty(obj, 'key');
  console.log(output); 