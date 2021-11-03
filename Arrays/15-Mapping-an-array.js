const numbers = [1,-1,2,3];

// const filtered = numbers.filter(n => n >=0);

// const items = filtered.map(n => '<li>'+n+'</li>');

// // const items = filtered.map(n => {
// //     const obj = { value:n };
// //     return obj;
// // });

// // const items = filtered.map(n => {
// //     return { value:n };
// //    //gives same result 
// // });

// // const items = filtered.map(n =>  ({value:n}) ); //without ({}) engine considers as codeblock
// //    //gives same result 

// const html = '<ul>'+items.join('')+'</ul>';
// console.log(html);
//map can map element to anything like arrays

const items = numbers
    .filter(n => n >= 0)
    .map(n => ({ value: n}))
    .filter(obj => obj.value >1)
    .filter(human => human.value<=3); //known as chaining
console.log(items);