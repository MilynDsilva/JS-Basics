//value types
//num,string,bool,symbol,undefined,null

//ref types 
// objs, fun , array

let x = 10; //replaces with below value
let y = x; // copy is stored in y , is independent

x = 20;


let x = { value: 10};
let y = x;

x.value = 20;  //both x and y are 20 , reffernece
//obj is stored somewhere in memory but only address is stored in the variable
//so when we copy x into y only address is coped

//primitives are calue types which store copy where as objs store referrence
//which means in obj the value changed will be reflected
// primitives are copied by their value
//objects are copied by their referrence