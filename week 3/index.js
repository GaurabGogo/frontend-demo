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

//  Looping Arrays

// const menu = [5, 6, 7, 8, 9];

// for (const item of menu) {
//   console.log(item);
// }

// for (const index of menu.entries()) {
//   console.log(index);
// }

// for (const [index, item] of menu.entries()) {
//   console.log(index, item);
// }

// Optional Chaining (?)

// const person = {
//   name: "John",
//   age: 30,
//   isStudent: true,
// };

// const person = {
//   name: {
//     firstName: "John",
//   },
// };

// const firstName = person?.name?.firstName;
// console.log(firstName);

// console.log(person?.name?.firstName);
// console.log(person?.age);
// console.log(person?.isStudent);

// Looping Objects

// const days = {
//   monday: "Monday",
//   tuesday: "Tuesday",
//   wednesday: "Wednesday",
//   thursday: "Thursday",
//   friday: "Friday",
//   saturday: "Saturday",
//   sunday: "Sunday",
// };

// Object.keys

// const properties = Object.keys(days);

// for (const property of properties) {
//   console.log(property);
// }

// Object.values

// const values = Object.values(days);

// for (const value of values) {
//   console.log(value);
// }

// Object.entries

// const entries = Object.entries(days);

// for (const [key, value] of entries) {
//   console.log(key, value);
// }

// Set

// const orderSet = new Set(["Pizza", "Pizza", "Burger", "Pizza"]);

// console.log(orderSet);

// // Set.add

// orderSet.add("Pizza");
// orderSet.add("Pizza");
// console.log(orderSet);

// // Set.delete

// orderSet.delete("Pizza");
// console.log(orderSet);

// // Set.has

// const hasPizza = orderSet.has("Pizza");
// console.log(hasPizza);

// // Set.clear

// orderSet.clear();
// console.log(orderSet);

// // Set.size

// const size = orderSet.size;
// console.log(size);

// // Set.forEach

// orderSet.forEach((item) => {
//   console.log(item);
// });

// // Set.values

// const values = orderSet.values();

// for (const value of values) {
//   console.log(value);
// }

// // Set.entries

// const entries = orderSet.entries();

// for (const [key, value] of entries) {
//   console.log(key, value);
// }

// // Set.keys

// const keys = orderSet.keys();

// for (const key of keys) {
//   console.log(key);
// }

// MAP
// const orderMap = new Map();
// orderMap.set("Pizza", 10);
// orderMap.set("Burger", 20);
// orderMap.set("Pizza", 30);

// console.log(orderMap);

// orderMap.set("Pizza", 40);
// console.log(orderMap);

// orderMap.delete("Pizza");
// console.log(orderMap);

// orderMap.clear();
// console.log(orderMap);

// orderMap.forEach((value, key) => {
//   console.log(key, value);
// });

// String

// const str = "Hello World";
// console.log(str);
// console.log(str[0]);
// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.charAt(0));
// console.log(str.charCodeAt(0));
// console.log(str.indexOf("o"));
// console.log(str.lastIndexOf("o"));
// console.log(str.includes("o"));
// console.log(str.startsWith("Hell"));
// console.log(str.endsWith("d"));

// String.split

// const str = "Hello World";
// const arr = str.split(" ");
// console.log(arr[1]);

// String.replace;

// const str = "Hello World";
// const newStr = str.replace("World", "Hi");
// console.log(newStr);

// slice
// console.log(str.slice(0, 3));
// console.log(str.slice(3)); // lo World
// console.log(str.slice(-3));  // rld

// sub string
// console.log("Hello World".substring(4, 5)); // o
