const circle = {
    radius : 2,
    get area() {
        return Math.PI * this.radius * this.radius;
    }
};
console.log(circle);
//for read only we use getter