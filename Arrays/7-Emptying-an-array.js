let numbers = [1,2,3,4];
let another = numbers;
//sol1 
//numbers = [];// the another variable is still pointing to the other var

//sol 2 
//numbers.length = 0;// truncates the arrays

//sol3
//numbers.splice(0,numbers.length); //can goto position and remove elements
//removing from 0 to length

//sol4
while(numbers.length > 0)
    numbers.pop();
console.log(numbers,another);