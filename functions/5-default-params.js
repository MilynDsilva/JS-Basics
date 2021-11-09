// function interest(principal,rate,years) {
//     return principal *rate/100 *years;
// }

// console.log(interest(10000,3.5,5));



// function interest(principal,rate,years) {
//     rate = rate || 3.5;
//     years = years || 6;
//     return principal *rate/100 *years;

// }

// console.log(interest(10000,3.5));

function interest(principal,rate = 3.6,years = 6) {
    return principal *rate/100 *years;
}

console.log(interest(10000,3.5));
//Make sure to have all the params after default param to have a default value
