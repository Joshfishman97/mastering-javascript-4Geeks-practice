function getElementsLessThan100AtProperty(obj,key){
    let myArray = obj[key]
    let storageArray= [];
   if(typeof myArray==="object" ){
       for(let i = 0; i<myArray.length; i++){
           if(myArray[i]<100){
               storageArray.push(myArray[i])
           }

       }
   }
   return storageArray;
}   
   




var obj = {
  key: [1000, 20, 50, 500]
};
var output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output)