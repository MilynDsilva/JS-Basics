const movies = [
    {title: 'a', year:2010, rating:2.5},
    {title: 'b', year:2008, rating:4.5},
    {title: 'c', year:2015, rating:3.5},
    {title: 'd', year:2018, rating:4}
]; //array of objects

const titles =
movies.filter(m =>m.year === 2018 && m.rating >= 4)
.sort((a,b) => a.rating = b.rating)
.reverse()
.map(m => m.title)
//m is the movie object

console.log(titles);

//sorts in decending order

// const numbers = [65, 44, 12, 4];
// const newArr = numbers.map(myFunction);
// //const newArr = myFunction(numbers);
// console.log(newArr);

// function myFunction(num) {
//   return num * 10;
// }