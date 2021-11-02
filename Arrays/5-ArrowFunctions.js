// const courses = [
//     {id:1,name:'a'},//shift alt down arrow to copy paste
//     {id:2,name:'b'},
// ];
// const course = courses.find(function(course){
//     return course.name === 'a'
// });

// console.log(course);

const courses = [
    {id:1,name:'a'},//shift alt down arrow to copy paste
    {id:2,name:'b'},
];
const course = courses.find((course) => course.name === 'a');

console.log(course);