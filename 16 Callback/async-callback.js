function logOutTwo(callback) {
  setTimeout(() => {
    console.log(2);
    callback();
  }, 0);
}

function logOutOne(callback) {
  setTimeout(() => {
    console.log(1);
    callback();
  }, 1000);
}

logOutOne(logOutTwo);
