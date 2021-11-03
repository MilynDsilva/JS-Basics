//assume to calculate the sum of all nums, total cost of all the ietems in a cart
const numbers = [1,-1,2,3];

// let sum =0;
// for (let n of numbers)
//     sum +=n;

    //normal method
    //acc is like usm which we initialize and other is the callback function
    const sum =numbers.reduce((accumulator,cuurentVale) => {
        return accumulator+cuurentVale;
    },0); //can reduce an array to a single value
    console.log(sum);
//0 is to initialize accumulator

//a=0,c=1=> a=1
//a=1,c=-1=>a=0 ..