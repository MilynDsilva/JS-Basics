const circle = {
    radius:1,
    draw() {
        console.log('draw');
    }
};

const another = {};

for (let key in circle){
    another[key] = circle[key]; //= another['readius]= circle['radius];

}
console.log(another);


///another way of cloning
const another = Object.assign({},circle); //src 
//const another = Object.assign({color:'yellow'},circle); //src 
//can add new properties also
//equvalent to 3 lines line 8 to 11

const another = {...circle }; //spread operator basicaly takes all the properties
//from the circle and puts here inside brackets { }
//simplest way