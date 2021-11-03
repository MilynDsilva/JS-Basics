const numbers = arrayFromRange(-5,-2);

function arrayFromRange(min,max) {
    let array1 = [];
    for (let i=min;i<=max;i++){
        array1.push(i);
    }
    console.log(array1);
}