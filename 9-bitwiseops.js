//logical or ||  , bitwise |

//1 = 00000001
//2 = 00000010
//3 = 00000011
//R = 00000000

console.log(1 | 2); //bitwise or , 3
console.log(1 & 2); //bitwise and, 0

const readperm = 5;
const writeperm = 4;
const executeperms = 1;

let myperms = 0;
myperms = myperms | readperm | writeperm;
console.log(myperms);
//returns 10 , | basically adds 

let message = (myperms & readperm) ? 'yes' : 'no';
//if value is true prints yes else no

console.log(message);