function removeProperty(para1, para2) {
  delete para1[para2]
  console.log('b')
  return para1;

}console.log('a')
var thing = {
  name: 'Sam',
  age: 20
}
removeProperty(thing, 'name'); // moving to line one to be excuted in fucntion with the given paramaters
console.log(thing)