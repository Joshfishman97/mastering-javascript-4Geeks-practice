function addProperty(obj,para2,para3){
 obj[para2] = true
    return obj
}
var car = {
    model: 'Toytoa',
    make: 'corolla'
}
addProperty(car,'model','make')
console.log(car.make)