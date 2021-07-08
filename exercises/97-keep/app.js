function keep(arr,keeper){
    
    let keeperArray = arr.filter((item,index) => item===keeper)
    return keeperArray
}


var output = keep([1, 2, 3, 2, 1], 2) 
console.log(output)