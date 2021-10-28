const array= [0,null,undefined,'',3,4,5];
console.log(countTruthy(array));

function countTruthy(array) {
    let count = 0;
    for (let value of array)
        if (value) //js engine interprits as truthy/false if reuslt is trthy count in incremented 
            count++;
        return count;
}
