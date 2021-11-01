// let address= {
//     street: 'a',
//     city: 'mangalore',
//     zipcode: 575005
// };

let address = showAddress('a','b','c');
console.log(address);

//factory function
function showAddress (street,city) {
    return {
        street,
        city
    };
}


//constructor function
let address1 = new ShowAddress('a','b','c');
console.log(address);
function ShowAddress(street,city) {
    this.street = street;
    this.city = city;
};
ShowAddress(bbb);
showAddress(aaa);
