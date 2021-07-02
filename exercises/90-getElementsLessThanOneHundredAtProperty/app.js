function getElementsLessThan100AtProperty(obj,key){
    let myArray = obj[key]
   if(myArray.length===0){
       return [];
   }
   if(myArray>100){
       return [];
   }
   if(myArray==!myArray.isArray){
       return [];
   }
   if(myArray===undefined){
       return [];
   }
   return myArray
}




var obj = {
  key: [1000, 20, 50, 500]
};
var output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output)