function removeElement(arr,discarder){
    let ArrWithDiscarder = arr.filter((item,index)=>item!=discarder)
    return ArrWithDiscarder
}



var output = removeElement([1, 2, 3, 2, 1], 2); 
console.log(output); // --> [1, 3, 1]