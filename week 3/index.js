// function main() {
//   let a = 10;
// }

// main();
// console.log(a);

// let arr = [1, 2, 3, 4, 5];

// let person = {
//   name: "John",
//   age: 30,
//   isStudent: true,
// };

// console.log(document.getElementsByTagName("h1"));

// document.getElementById("second-heading");

// document.getElementsByClassName("class-heading");

// console.log(document.querySelectorAll(".class-heading"));

// const heading = document.getElementsByTagName("h1");
// const heading = document.getElementById("heading");

// console.log(heading.id);

// const box = document.getElementsByClassName("box")[0];
// const btn = document.getElementById("btn");

// btn.addEventListener("click", function () {
//   box.classList.toggle("active");
// });

// document.addEventListener("keyup", function (e) {
//   if (e.key === "a") {
//     box.classList.toggle("active");
//   }
// });

{
  // console.log(a);
  // let arr = [1, 2, 3, 4, 5];
  // const a = 10;
}

// console.log(a); // udefined
// var a;

// TODO LIST
// createElement
// appendChild
// removeChild

// function calcAge() {
//   console.log(this);
// }

// calcAge();

// const obj = {
//   calcAge: () => {
//     const self = this;

//     console.log(this);
//   },
// };

// obj.calcAge();

// const calcAge = () => {
//   console.log(this);
// };

// calcAge();

// const btn = document.getElementById("btn");
// btn.addEventListener("click", function () {
//   console.log(this);
// });

// Destructuring Arrays

// const [a, b, c] = [1, 2, 3];
// console.log(b);

//  Default Values in destructuring
// const [a, b = 2, c] = [1, , 3];
// console.log(b);

// Destructuring Objects

// const person = {
//   name: "Velocis",
//   age: undefined,
// };

// const { name, age = 40 } = person;
// default values in object destructuring
// const { name = "name2", age = 40 } = person;
// console.log(name);
// console.log(age);

// Rename properties in object destructuring

// const person = {
//   name: "Velocis",
//   age: undefined,
// };
// const { name: n, age: a = 40 } = person;
// console.log(n);
// console.log(a);

// Spread Operator

// const arr = [1, 2, 3];
// console.log(...arr);
// const newArr = [...arr, 4, 5];
// console.log(newArr);

// Rest Operator in array destructuring

// const [a, b, ...c] = [1, 2, 3, 4, 5];
// console.log(c);

//  Rest Operator in object destructuring

// const days = {
//   monday: "Monday",
//   tuesday: "Tuesday",
//   wednesday: "Wednesday",
//   thursday: "Thursday",
//   friday: "Friday",
//   saturday: "Saturday",
//   sunday: "Sunday",
// };
// const { monday, tuesday, ...rest } = days;
// console.log(rest);

// Nullish Coalesing Operator ( null or undefined)

// let number = undefined;
// const newNumber = number ?? 4;
// console.log(newNumber);

//  OR Assignment Operator

// let number = null;
// const newNumber = number || 4;
// console.log(newNumber);

// AND Assignment Operator

// let number = null;
// const newNumber = number && 4;
// console.log(newNumber);

// Short Hand Property Assignment

// let a = a + 1;
// let ++a;

// let newNumber = 5;
// newNumber ??= 4; // const newNumber = newNumber ?? 4;
// console.log(newNumber);
