const numbers = [1,2,3,4,5,1];

const max = getMax(numbers);

console.log(max);

function getMax(array) {
    if (array.length === 0) return undefined;

    let maxele = array[0];

    for (let i = 1; i <array.length; i ++)
        if(array[i] > maxele)
            maxele = array[i];
    return maxele;
}

//reduce method

function getMax(array) {
    if (array.length === 0) return undefined;
    array.reduce ((accumulator,current)=> {
        // if (current > accumulator) return current;
        // return accumulator; //cleaner vs is below

        return (current>accumulator) ? current : accumulator;

    });
    
}//if no value given in takes the initial value

//array.reduce((a,b)=> (a > b) ? a:b);