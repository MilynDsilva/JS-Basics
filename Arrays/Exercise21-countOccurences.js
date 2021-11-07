const numbers = [1,2,3,4,1,1];

const count = countOccurences(numbers,1);

console.log(count);

function countOccurences(array, searchElement) {
    let counter = 0;
    let newcounter = 0;
    const newelement = [];
    newelement.push(searchElement);
    for (let element of array)
        if(newelement.includes(element))   
            counter +=1;
            newcounter = counter;
        return newcounter;
    }
    // function countOccurences(array, searchElement) {
    //     let count = 0;
    //     for (let element of array) 
    //         if(element === searchElement)
    //             count++;
    //     return count;
    // }
    // better code ^
    //
    // function countOccurences(array, searchElement) {
    //     return array.reduce((accumulator, current) =>{
    //     const occurance = (current === searchElement) ? 1:0;
    //     console.log(accumulator,current,searchElement);
    //     return accumulator + occurance;
    //     },0)
    // }
