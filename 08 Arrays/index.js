let arr = [1, 2, 3];

const newArr2 = arr.forEach((item) => {
  return item;
});

const newArr = arr.map((item) => {
  return item;
});

const newArr3 = arr.filter((item) => {
  return item >= 2;
});

console.log(newArr);
console.log(newArr3);
