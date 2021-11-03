const numbers = [1,-1,2,3,0];
//to check if all numbers in an array are +ve
const posi= numbers.every(function(value){
    return value >=0;//every one is greater than 0
});

console.log(posi);

//call back function 
const someposi= numbers.some(function(value){
    return value >=0;//some are greater than  0
});//atleast 1 in an array

console.log(someposi);