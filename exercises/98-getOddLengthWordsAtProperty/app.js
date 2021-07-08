function getOddLengthWordsAtProperty(obj,key){
   return obj[key].filter((item)=>item.length % 2 !== 0)
}


var obj = {
  key: ['It', 'has', 'some', 'words']
};
var output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['has', 'words']