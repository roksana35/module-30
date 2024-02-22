
const glass={
    name:'glass',
    color:'blue',
    price:60,
    isClean:true,
}
console.log(glass);
// all proparty /keys

const keys=Object.keys(glass);
// console.log(keys);

// all proparty values
const values=Object.values(glass);
// console.log(values);
const entrise =Object.entries(glass)
// [
//     [ 'name', 'glass' ],
//     [ 'color', 'blue' ],
//     [ 'price', 60 ],
//     [ 'isClean', true ]
//   ]
// console.log(entrise);

// delete a object element
// delete glass.isClean;
// console.log(glass)
// delete way-2
// const {isClean,...rest}=glass;
// console.log(rest);

// // freeze
// Object.freeze(glass);
delete glass.name;
glass.price=100;
console.log(glass);


