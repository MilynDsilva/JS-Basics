const courses = [
    {id:1,name:'a'},//shift alt down arrow to copy paste
    {id:2,name:'b'},
];

//console.log(courses.includes({id:1,name:'a'}));
//false because objs in both are different , 2 diff reference(ref is checked0)
const course = courses.find(function(course){
    return course.name === 'a' //undefined if does not match;
}); //call back fun

const course1 = courses.findIndex(function(course){
    return course.name === 'b' //undefined if does not match;
}); //call back fun

console.log(course,course1);