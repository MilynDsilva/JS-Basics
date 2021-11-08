//function declaration
function walk() {
    console.log('walk');
}

//function expression
//in js fun = objs
let run = function () {
    console.log('run');
}; //anonymous fun expression

run(); //calling via ref

let move = run; //both ref to same object in memory
run();
move();



// let run = function walk() {
//     console.log('run');
// }; //named fun expression

