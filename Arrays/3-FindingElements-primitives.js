const numbers= [1,5,1,1,2,1,5];
console.log(numbers.indexOf(4)); //returns index if elemenets is present
//else returns -1

console.log(numbers.indexOf(1,3));//here 1 is the elemenet whose index has to be returned
//3 is the element where the searchingg of index has to begin

console.log(numbers.lastIndexOf(1));//returns the index of last element given 

console.log(numbers.indexOf(1) !== -1) // to check is element exists in array or not

console.log(numbers.includes(1));