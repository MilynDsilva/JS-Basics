//hour
//if hr is between 6 to 12 pm :gm
//12-6pm :ga else ga
// if(condition) {
//     statement
// }
// else if (anothercondition){
//     statement
// }
// else {
//     statement
// }
let hour =11;

if (hour >=6 && hour <12) {
    console.log("Good morning!");
}
else if (hour >=12 && hour <18) {
    console.log("Good afternoon!");
}
else if (hour >=18 && hour <=24) {
    console.log("Good evening!");
}
else {
    console.log("Invalid input");
}