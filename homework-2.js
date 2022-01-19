// Homework will help you practice loops, arrays, objects, and functions.

// 1. Create a function that returns the number of true values there are in an array.

const list = [
  true,
  false,
  false,
  true,
  false,
  false,
  false,
  true,
  true,
  true,
  false,
];
function countTrueStatements(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]){
      count++ ;
    }
  }
  return count;
}
const counter = (countTrueStatements(list));
console.log(counter)
//console.log("Number of trues",count)

// 2. Write a function that receives a car object as an argument and outputs the car's make and model.
let car = {
  make: "chevy",
  model: "cobalt",
};
function myCar(car) {
  console.log(car.make, car.model);
}
myCar(car);

// 3. Write a function to get the first element in an array
let myarray = [0, 3, 4,k, 4, 5];
console.log(myarray[0]);
