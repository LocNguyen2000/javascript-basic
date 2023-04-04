// console.log(a);
// var a = 2;

logOut();
logOutTwo();

// normal function can be hoisted
function logOut() {
  console.log(1);
}

// arrow function cannot be hoisted
const logOutTwo = () => {
  console.log(2);
};
