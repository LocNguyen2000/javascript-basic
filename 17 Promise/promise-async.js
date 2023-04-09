// Promise 1

// const url = "https://jsonplaceholder.typicode.com/todos/1";
// const data = fetch(url);

// data
//   .then((value) => {
//     return value.json();
//   })
//   .then((value) => {
//     console.log(value);
//   });

// -------------------------

// // Promise 2
// function getTodos(IS_ADMIN) {
//   return new Promise((resolve, reject) => {
//     if (IS_ADMIN)
//       resolve({
//         todo: "Get cooking",
//         createdBy: "Loc",
//       });
//     else reject(new Error("Only admin can get this todo note"));
//   });
// }

// getTodos(true).then((data) => {
//   console.log(data);
// });

// -------------------------
// // Promise 2

function getTodos(IS_ADMIN) {
  return new Promise((resolve, reject) => {
    if (IS_ADMIN)
      resolve({
        todo: "Get cooking",
        createdBy: "Loc",
      });
    else reject(new Error("Only admin can get this todo note"));
  });
}

function getUsers(IS_ADMIN) {
  return new Promise((resolve, reject) => {
    if (IS_ADMIN)
      resolve({
        userId: 1,
        username: "Loc",
      });
    else reject(new Error("Only admin can get this todo note"));
  });
}

// Promise.allSettled()

// Promise.race([getUsers(true), getTodos(true)]).then((value) => {
//   console.log(value);
// });

// const promises = Promise.all([getUsers(true), getTodos(true)]);
// promises.then((data) => {
//   console.log(data);

//   const value = data[0];
//   const value2 = data[1];

//   console.log(value);
//   console.log(value2);
// });
