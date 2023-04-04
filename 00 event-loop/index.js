// Javascript
// dong bo - synchronous
// don luong - single thread

// EVENT LOOP:  http://latentflip.com/loupe/
// callback queue
// callstack
// webAPI (SetTimeout)
setTimeout(() => {
  console.log(1);
}, 500);

console.log(2);
