// let x = 1;
// x = 'a';
// //char: dynamic language


function sum (){
    let total = 0;
    for (let value of arguments) //any obj that has an iterator
        total += value;
    return total;
}


// function sum (a,b){ //can remove args since we are not referencing
//     let total = 0;
//     for (let value of arguments) //any obj that has an iterator
//         total += value;
//     return total;

//     // console.log(arguments);
//     // return a+b;
// }
console.log(sum(1,2,3,4));