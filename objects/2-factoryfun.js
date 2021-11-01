//now we have dupe of draw method
//bug in a metho = fix in multiple places

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
circle.draw();
//factory functions

function createcircle(radius) {
    return {
        radius,
        //key : value 
        //if same we can remove key
        // draw: function() {
        //     console.log('draw');
        // }
        draw() { //function
            console.log('draw');
        }
    };
    
}
//circle1 is obj singlie defination above
const circle1= createcircle(1);
console.log(circle1);

const circle2= createcircle(10);
console.log(circle2);
//in factory function we have defined our logic in one place so if 
//we have a bug we fix in one place
//for dif values we get different circle objs