const circle = {
    radius:1,
    draw() {
        console.log('draw');
    }
};

for (let key in circle) //iterate over all the props of an objects
    console.log(key,circle[key]);

for (let key of circle) //iterate over all the props of an objects
    console.log(key); //error
//Object.keys(circle) for circle above  gives keys
//Object.entries(circle)  //each entry is displayed
// all funs are objes so we can access the properties
