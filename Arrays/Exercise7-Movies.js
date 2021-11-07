const movies = [
    {title: 'a', year:2010, rating:2.5},
    {title: 'b', year:2008, rating:4.5},
    {title: 'c', year:2015, rating:3.5},
    {title: 'd', year:2018, rating:4}
]; //array of objects
movies.filter(m =>m.year === 2018 && m.rating >= 4)
.sort((a,b) => a.rating = b.rating)


//sorts in decending order