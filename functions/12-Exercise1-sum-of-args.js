//sum()
const numbers = [1,2,3,4];

const total = sum(numbers);
//const total = sum(1,2,3,4);

console.log(total);

function sum(...items) {
    if(items.length === 1 && Array.isArray(items[0]))
        items = [...items[0]]; //spread operator and not rest // we reste to a new array
    return items.reduce((a,b)=> a + b);

}
//if array of numbs is passed  the rest operator will store it as an array in an arrray 
//rest stores values as an array
//index 0 , has single element whic is the array itself