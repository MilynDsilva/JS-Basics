const numbers = [1,2,3,4];

const output = except(numbers,1);

console.log(output);

function except(array, excluded) {
    //console.log(numbers);
    const output = [];
    for (let elemenet of array)  
        if (elemenet === excluded)
        {
            console.log(numbers.indexOf(4));
            console.log('true');
        }
        else {
            
            return false;
        }  
}