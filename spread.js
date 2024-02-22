
const max = Math.max(22,12,44,66,75,89,176);
// console.log(max);
// spread method
const numbers=[22,33,41,53,4,92,56,78];
const arrayMax= Math.max(...numbers);

// console.log(...numbers);
// console.log(arrayMax);

const friends=[12,43,23,52,67,78];
const bondhu= friends;

// console.log(friends);

// console.log(bondhu)
const dosto=[...friends];   //copy
friends.push(100);
console.log(dosto);
console.log(friends);
// advanced
const sonkha = [...friends,8888];   //added new element while copy
console.log(sonkha);

