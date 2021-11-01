//factory functions
function createcircle(radius) {
    return {
        radius,
        draw() { 
            console.log('draw');
        }
    };
}
const circle1= createcircle(1);

//constructor function (to create an obj) 
//camel notation for factory fun oneTwoThre
//pascal notation OneTwoThre for constructor fun
//objs are dynamic in js
//constreuctor function
//this  ->reference for executing this peice of code
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('Draw');
    }
}

const circle = new Circle(1);
//create new empty obj,this. will point to newly created object
//will return new object to the function