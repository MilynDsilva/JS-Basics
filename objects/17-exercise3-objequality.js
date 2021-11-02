
//constructor function
let address1 = new ShowAddress('a','b','c');
let address2 = new ShowAddress('a','b','c');

console.log(areEqual(address1,address2));
console.log(areSame(address1,address2));


function ShowAddress(street,city) {
    this.street = street;
    this.city = city;
}

function areEqual(address1,address2){
    return address1.street === address2.street &&
            address1.city === address2.city;
}
function areSame(address1,address2){
    return address1 === address2; //t or f //refferncing same obj
}
