function getElementsGreaterThan10AtProperty(obj, key) {
    let newArray = obj[key];
    let answer = [];
   if(typeof newArray === "object" || newArray !== undefined){
       for(let i= 0; i<newArray.length; i++){
           if(newArray[i]>10){
               answer.push(newArray[i])
           }
       }
   }
   return answer
    }

    var obj = {
        key: [1, 20, 30]
    };
    var output = getElementsGreaterThan10AtProperty(obj, 'key');
    console.log(output);