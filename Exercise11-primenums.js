showPrimes(40);

function showPrimes(limit) {
    for (i=2;i<=limit;i++){
        if (i == 2 || i == 3)
            console.log(i);
        else if (i % 2 ==0 || i % 3 ==0) 
            continue;   
        else console.log(i);
    }
}
