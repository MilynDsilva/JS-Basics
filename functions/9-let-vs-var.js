function start () {
    for (var i=0; i<5; i++)
        console.log(i);
    
    console.log(i);//cur val of i
}
//var; the scope is not limited on block where its defined
//not limited to the block but limited to the function

start();


var color = 'red'; //window.color ,accesible
let age = 30; // not accesible in window.varname
//avoid var
