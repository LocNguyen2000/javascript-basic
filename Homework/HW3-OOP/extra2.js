// Write a function that merge 2 objects into 1.

const objInstance1 = {
  name: "Khanh",
  age: 28,
};

const objInstance2 = {
  class: {
    name: "CACLC2",
    year: 2018,
    teacher: {
      name: "Loc",
    },
    students: [{ name: "Khanh0" }, { name: "Khanh1" }, { name: "Khanh2" }],
  },
};

function mergeObjects(obj1, obj2) {
  // code here
}

let mergedObj = mergeObjects(objInstance1, objInstance2);

// THIS IS RESULT (DO NOT EDIT)
const resultInstance = {
  name: "Khanh",
  age: 28,
  class: {
    name: "CACLC2",
    year: 2018,
    teacher: {
      name: "Loc",
    },
    students: [{ name: "Khanh0" }, { name: "Khanh1" }, { name: "Khanh2" }],
  },
};

//
// THIS IS RESULT (DO NOT EDIT)
//
if (deepEqual(mergedObj, resultInstance)) console.log("THIS IS TRUE");
else console.log("THIS IS FALSE");

function deepEqual(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];
    const areObjects = isObject(val1) && isObject(val2);
    if (
      (areObjects && !deepEqual(val1, val2)) ||
      (!areObjects && val1 !== val2)
    ) {
      return false;
    }
  }

  return true;
}

function isObject(object) {
  return object != null && typeof object === "object";
}
