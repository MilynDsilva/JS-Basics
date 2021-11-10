const numbers = [1,2,3,4];

const output = except(numbers,[1,2,3,4]);

console.log(output);

function except(array, excluded) {
    //console.log(numbers);
    const output = [];
    for (let elemenet of array)  
        if (!excluded.includes(elemenet))
            output.push(elemenet);
    return output;
}