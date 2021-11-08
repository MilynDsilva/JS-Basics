function sum (...args){
   console.log(args); //array of elemets // removing ... = single element
    return args.reduce((a,b)=> a+b);
}
console.log(sum(1,2,3,4,5));

//for varying number of params we can use rest operator
///...args is the rest operator
/// spread array is taking individual elements


// function sum (...args){
//     let total = 0;
//     for (let value of arguments) //any obj that has an iterator
//         total += value;
//     return total;
// }
// console.log(sum(1,2,3,4,5));

function newsum(discount, ...price){
    const total = price.reduce((c,d)=>c+d);
    return total *(1- discount);
}
console.log(newsum(0.1,20,30))