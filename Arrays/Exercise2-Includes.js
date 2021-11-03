const numbers = [1,7,3,4,6,8];

//console.log(numbers.includes(1));
console.log(includes1(numbers,9));

function includes1(array,searchele) {
    for (i=0;i<=numbers.length;i++)
    {   
        let newarray = [];
        newarray.push(searchele);
        y=searchele;
        //console.log(numbers,newarray);
        if(numbers !== newarray)
        {
            console.log('true'); 
        }
        //console.log('true');
    }
    console.log('false');
}