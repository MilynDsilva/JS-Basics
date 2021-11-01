let radius =1;
let x =1;
let y =1;
//highly related contents above lets put them in a object
//purpose to  create obj is group related objs
//or functions that operate on these variables
const circle = {
    radius: 1,
    location: {
        x:1,
        y:1
    },
    isVisible: true,
    draw: function() {
        console.log('draw');
    }

};

// can be accesible 
circle.draw();//method

//function draw();