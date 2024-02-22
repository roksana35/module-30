
// object destructureing
const student = {
    name:'Roksana Akter',
    class:10,
    age:20,
    phone:'01311307235',
}
// destructure
const {name,age,phone:number}=student;

// normal way to get object single element
// const name = student.name;
// const age = student.age;
// const phone = student.phone;


// console.log(name);
// console.log(age);
// console.log(number);
// console.log(name);
// console.log(name);


// array destructureing
const numbers = [45,99];
const [frist,second]= number;
// console.log(frist);
// console.log(second);
function  doSomething(a,b){
    return [a*2,b*2];
}
const [prothom,ditio]=doSomething(4,10);
console.log(prothom)
console.log(ditio)

