function getElementsLessThan100AtProperty(obj,key){
    
    console.log(typeof obj[key]);
}




var obj = {
  key: [1000, 20, 50, 500]
};
var output = getElementsLessThan100AtProperty(obj, 'key');
