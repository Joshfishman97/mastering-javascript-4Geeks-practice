function getElementsThatEqual10AtProperty(obj, key) {
  var ans =[];
  for (let elem in obj[key])
  {
      console.log("elem", elem, obj[key][elem])
    if(obj[key][elem] === 10)
      ans.push(obj[key][elem])
  }
  return ans;
}
var obj = {
  pupo: [1000, 10, 50, 10]
};
var output = getElementsThatEqual10AtProperty(obj, 'pupo');
console.log(output); // --> [10, 10]