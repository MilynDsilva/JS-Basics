const circle = {
    radius = 1,
};
//circle = {}; cannot reset since its a const
//But can change by adding or removing some properties
circle.color = 'yellow';
circle.draw = function () {}

delete circle.color;

console.log(circle);