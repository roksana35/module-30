// normal arrow function
const difference = (x,y) =>x+y;

const multiply = (first,second,third)=>first*second*third;
// option-1
// single parameter or one parameter you can use braket as your wish.
const getAge = (person)=>person.age;
const student = {name:"Roksana Akter",age:21}
const age = getAge(student)
// console.log(age);
// option-2 this not working 
// const getAges = (person)=>person.age;
// const ages = getAge(students({name:'roksana',ages:21}))
// console.log(ages);



const getThird = numbers=>numbers[3];
const third = getThird([1,3,5,7,5,10])
console.log(third);

const doublelt = num=>num*2;

// no parameter
const getPI= ()=>Math.PI;
console.log(getPI());
// large arrow function .if you want to get anything returned from this function.then you have to use the return keyword
const doMath = (x,y,z)=>{
    const sum = x+y+z;
    const mult=x*y*z;
    const result = sum+mult;
    return result;
} 
console.log(doMath(2,4,6));