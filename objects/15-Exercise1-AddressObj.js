 let address= {
        street: 'a',
        city: 'mangalore',
        zipcode: 575005
    };
    
    function showaddress(address) {
        for (let key in address)
            console.log(key,address[key]);
    }
    showaddress(address);




// //street ,city,zipcode 
// //fun showaddress(address)
// function showaddress(address) {

// return {
//     street: address,
//     city: 'mangalore',
//     zipcode: 575005
// };


// //console.log(showaddress('some street'));
// }

// const addresss = new address("something");

// console.log(showaddress('some street'));