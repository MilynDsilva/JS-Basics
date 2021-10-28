//Values which rae of type string are printed with the name and its value
const movie = {
    title:'a',
    releaseyear:2018,
    rating:4.5,
    director:'b'
};

showproperties(movie);

function showproperties(obj) {
 for(let key in obj){
     //console.log(key);
     if (typeof(obj[key])==='string'){
        console.log(key,obj[key]);
     }
 }
}