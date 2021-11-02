const first = [1,2,3];
const second = [4,5,6];

const combined = [...first,33,...second];
//[1,2,3,4,5,6] same as above ..first
// const combined =first.concat(second);

//const copy = combined.slice(0,Infinity)
const copy = [...combined];
console.log(combined);

console.log(copy);