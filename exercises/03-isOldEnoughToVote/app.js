function isOldEnoughToVote(age) {
 if(age>=18){
     return true;
 }
 else{return false;}
}
var age = isOldEnoughToVote(22)
console.log(age)