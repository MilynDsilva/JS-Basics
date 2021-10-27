//building blacks of js ,set of statements
function greet() {
    //body of function where we add logic
    //to display greeting
    console.log('Hello world');
} // no need to add ; 

greet();

function greet1(name, lastname) {
    //name is param , only meanigfull inside the function , canno be accesible outside the function
    console.log('Hello '+name+ " " +lastname);
} // no need to add ; 

greet1('John','Smith');
//john is an argument , name is parameter
greet1('Mohan');


function greet2(name, lastname) {
        console.log('Hello '+name);
}
//printsundefined 
greet2('John');
//john is an argument , name is parameter
greet2('Mohan'); //default value in js is undefined 
