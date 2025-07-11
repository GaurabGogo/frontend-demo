// console.log(a);

// var a = 10;

// //Temporal Dead Zone
// let a = 5;

// console.log(a);

// function main() {
//   console.log(a);
// }

// var a = 10;

// main();

// console.log(this); // Window

// function name() {
//   console.log(this); // undefined or in strict mode to the window
// }

// name();

// const container = document.querySelector(".container");

// container.addEventListener("click", function () {
//   console.log(this); // Points to the dom element handler is attached to
// });

// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof NaN);
// console.log(typeof 0);

// const arr = [];

// arr.push("apple");
// arr.push("banana");
// arr.unshift("orange");
// arr.pop();

// console.log(arr);

// const arr = [1, 2, 3, 4, 5];

// console.log(...arr);

// const arr2 = [, 6, 7, ...arr];

// console.log(arr2);

// const [a, ...rest] = [1, 2, 3];

// console.log(a);
// console.log(...rest);

// const person = {
//   name: "John",
//   age: 30,
//   isStudent: true,
// };

// const newPerson = {
//   ...person,
//   country: "USA",
// };

// console.log(newPerson);

// const { name, ...rest } = person;

// console.log(name);
// console.log(rest);

// Nullish Coalescing Operator

// const num = null;
// const num2 = num ?? "hello world";

// console.log(num2);

// console.log(null || undefined || 0);
// console.log(null && "hello world");
// console.log(5 && "hello world");

// console.log("Jonas");

// setTimeout(function () {
//   console.log("Hello World");
// }, 0);

// console.log("Smith");

// setInterval(() => {
//   console.log("Hello World");
// }, 1000);

// function add(a, b) {
//   return function (c) {
//     return a + b + c;
//   };
// }

// const add2 = add(1, 2)(3);
// console.log(add2);

// const arr = [1, 2, 3, 4, 5];

// const find = arr.find((num) => num > 0);

// console.log(find);
