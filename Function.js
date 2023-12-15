//function declaration
function userName(name) {
  //parameter
  console.log("hello " + name);
}
userName("Sasi"); //argument

console.log(findProduct(4, 5)); //hoisting

function findProduct(a, b) {
  return a * b;
}
console.log(findProduct);
console.log(typeof findProduct);

//default parameter

function greet(name = "js") {
  console.log("hi", name);
}
greet("Javascript");
greet();

function factoril(n) {
  if (n == 1) return 1;
  return n * factoril(n - 1);
}
console.log(factoril(5));

//function expression

let isEven = function (num) {
  return num % 2 == 0;
};
console.log(isEven(5));

let findSum = function (arr) {
  let sum = 0;
  for (let val of arr) {
    sum = sum + val;
  }
  return sum;
};
console.log(findSum([2, 3, 4, 5, 6]));

//arrow function

let volume = (l, b, h) => l * b * h;
console.log(volume(2, 3, 4));

let arr = [2, 3, 4, 5, 6];
let arrSum = (arr) => {
  let sum = 0;
  for (let val of arr) {
    sum = sum + val;
  }
  return sum;
};
console.log(arrSum(arr));

//variable arguments - rest parameters

let prod = function (...args) {
  let result = 1;
  for (let val of args) result *= val;
  return result;
};
console.log(prod(7, 8, 9));

//callback-function

function greetConsole(name) {
  console.log("hello", name);
}
function greet(callback) {
  console.log(callback);
  callback("Javascript");
}
greet(greetConsole);
