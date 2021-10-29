console.log(sum(10));

function sum(limit) {
    let sum =0;
    for (i=0;i<=limit;i++) {
        //i=0;
        if (i % 3 ===0 || i % 5 ===0){
            //console.log(i);  prints all the disvisible elemenets 
           sum = sum+i;
            
            //console.log(sum);
        }
    }console.log(sum);
}

//prints 33