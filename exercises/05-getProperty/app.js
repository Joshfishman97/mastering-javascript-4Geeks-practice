function getProperty(obj, key) {
   return obj[key]
   

   
}
       var car = {
         model: 'Toyota'
       };


console.log(car.model);
console.log(car['model']);
console.log(getProperty(car, 'model'));

