const numbers = [1,7,3,4,6,8];

console.log(includes1(numbers,1));

function includes1(numbers,searchele) {
    for (i=0;i<=numbers.length;i++)
        if(numbers[i] === searchele)
            return true; 
        return false;
}
// true

// function includes2(array,searchele) {
//     for (let elemenet of array )
//         if (elemenet === serchelement)
//             return true;
//     return false;
// }