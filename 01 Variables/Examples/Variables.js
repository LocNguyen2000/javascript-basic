//Types of variables in JavaScript

//Can be re-assigned

function func1() {
  if (true) {
    var variableOne = "Linus Torvalds";
    const variableThree = "Creator of the Linux Kernel";
  }
  variableThree = "123";
  console.log(variableThree);
}

//Can be updated and re-declared

//Will never change
