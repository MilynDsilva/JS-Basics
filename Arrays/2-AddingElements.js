const numbers = [3,4];
//numbers = [] ; //error because its a constant
//add elels to end, begining,middle
numbers.push(6,7); // to add in the end
numbers.unshift(0,1,2); //pushes eles to right and adds elements to the begining 
numbers.splice(4,0,'a','b');//can go to a position and reove or add an elements
//starting position is 4 , 0 is delete counts and a and b are the inserting elements 
console.log(numbers);
numbers.splice(-2,1,9,9)
console.log(numbers);
