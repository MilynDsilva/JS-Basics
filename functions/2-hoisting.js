//function declaration ; can call before its defined
//walk(); //works
function walk() {
    console.log('walk');
}
//fun expression
//run(); //wont work ; like using const or var before its defined
let run = function () {
    console.log('run');
}; 
//hoisting is a process of moving function declaration to the top of the file
//its done automatically by js engine which executes the code
//thats why we can call before declaration