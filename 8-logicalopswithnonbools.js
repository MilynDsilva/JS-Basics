//can use logical ops with non bool ops /values
//false || true , op= true
//false || 'mosh' ,op = mosh, false || 1 , op = 1
//falsy values ,undefined,null,0,false ,'',NaN
// false || 1 || 2 , as soon as we find any true value is returned without looking at next value(ignored)
//real world ex;
// to select shirt color
let usercolor = 'red';
let defaultcolor = 'blue';
let currentcolor = usercolor || defaultcolor;

console.log(currentcolor);
// if usercolor is present next value is ignored
