// Promise:
/*
    pending: chua co ket qua j > undefined
    fulfilled: sau khi hoan thanh > co value
    reject: ko hoan thanh duojc > tra ve loi
*/
const promiseA = new Promise((resolve, reject) => {
  let isError = true;

  if (!isError) resolve(777);
  else reject("This is an error");
});

promiseA
  .then((value) => {
    console.log("hello", value);
  })
  .catch((error) => {
    console.log(error);
  });
