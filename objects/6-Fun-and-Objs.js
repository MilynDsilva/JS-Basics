function Circle(radius){
        this.radius = radius,
        this.draw = function () {
            console.log('draw');
        }   
}
//Circle fun is actually an object
//Circle.call({},1)  same as below
const another = new Circle(1); // if new is not written this. will
// point to global object called window
