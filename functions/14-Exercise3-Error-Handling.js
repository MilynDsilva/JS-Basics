try {
    const numbers = [1,2,3,4,1,1];

    const count = countOccurences(numbers,1);

    console.log(count);
    
} catch (e) {
    alert(e);
    //console.log(e);
}
    
    function countOccurences(array, searchElement) {
        if (!Array.isArray(array))
            throw new Error('Not an array');

        return array.reduce((accumulator, current) =>{
        const occurance = (current === searchElement) ? 1:0;
        console.log(accumulator,current,searchElement);
        return accumulator + occurance;
        },0)
        
    }