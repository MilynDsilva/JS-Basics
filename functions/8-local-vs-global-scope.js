// const message = 'hi'; //global scope
// console.log(message);

// function start() {
//     const message = 'hello there';
//     const message1 = 'hey';
//     if (true) {
//         const another = 'bye';
//     }
//     for (let i = 0; i <  5 ; i ++){
//         console.log(i);
//     }
// }

// //const , let are scope limited within the block

const color  = 'red'; //global scope

function start(){
    const message = 'hi';
    const color = 'blue';
    console.log(color);
}
function stop(){
    const message = 'bye';
}
start();