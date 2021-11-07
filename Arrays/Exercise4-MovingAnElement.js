const numbers = [1,2,3,4,5];

const output = move(numbers, 0, 3);

console.log(output);

function move(array,index,offset) {
    const pos = index + offset;
    if(pos >= array.length || pos <0){
        console.error('Invalid offset');
        return;
    }
    else{
    const output = [...array];//clone // spread oeprator
    const element = output.splice(index,1) [0];  //to remove ele we use splice
    output.splice(pos,0,element); //0 means we dont deletea any
    return output;
    }
}