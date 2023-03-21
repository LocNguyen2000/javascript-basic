let obj = { name: "Loc", field: "hello" };
let obj1 = { name: "Loc", field: "hello", func1() {} };

let newObj = Object.assign({}, obj1);
let newObj2 = { ...obj1 };
let newObj3 = JSON.parse(JSON.stringify(obj1));

console.log(newObj);
console.log(newObj2);
console.log(newObj3);
