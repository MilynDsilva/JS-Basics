//3types and or , not
//logical and &&
//returns true if both operands are true
console.log(true &&  true);//true
//fo approving loans, high incom and good credit score , real life ex
console.log(false && true);//false

let highincome = true;
let goodcreditscore = true;
let eligibleforloan = highincome && goodcreditscore;
console.log(eligibleforloan); // if one is false returns false else true

//logical or || , returs true if one operand is true 

let highincome1 = true;
let goodcreditscore1 = false;
let eligibleforloan1 = highincome1 || goodcreditscore1;
console.log(eligibleforloan); //returns true

//not !
let highincome11 = false;
let goodcreditscore11 = false;
let eligibleforloan11 = highincome11 || goodcreditscore11;
console.log('Eligible',eligibleforloan); // returns false

let applicationrefused = !eligibleforloan; // to get opposite
console.log('Application refused',applicationrefused);//prints true