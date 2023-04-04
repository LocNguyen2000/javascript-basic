// function func1(param1, func2) {
//   console.log(param1);
//   func2();
// }

// func1(1, function () {
//   console.log(2);
// });

// synchronous (Dong bo)
console.log("------------dong bo");

let arr = [1, 2, 3, 4];

console.log("Hello 1");

arr.map((item, index) => {
  console.log(item);
});

console.log("Hello 2");

console.log("------------bat dong bo");

// asynchronous (Bat dong bo)
// fetch, setTimeOut, setInterval, read file
function logOutThree() {
  setTimeout(() => {
    console.log(3);
  }, 500);
}

function logOutTwo() {
  setTimeout(() => {
    console.log(2);
  }, 0);
}

function logOutOne() {
  setTimeout(() => {
    console.log(1);
  }, 1000);
}

logOutOne();
logOutTwo();
logOutThree();
