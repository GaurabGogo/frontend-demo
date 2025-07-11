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

// const properties = Object.keys(days); // ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]

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

// Array Methods

// const arr = [1, 2, 3, 4, 5, 6];
// const arr2 = [6, 7, 8];

// console.log(arr.slice(0, 3));
// console.log(arr.slice(-3));
// console.log(arr.slice(0, 3));

// arr.splice(0, 3); // Mutates original array
// console.log(arr); // 4, 5

// console.log(arr.slice(0, 1));

// console.log(arr.reverse()); // Mutates original array
// console.log(arr);

// console.log(arr.concat(arr2));

// console.log(arr.join("****"));

// const name = ["John", "Doe", "Smith"];
// console.log(name.join(" "));

// For Each Loop

// const arr = [1, 2, 3, 4, 5, 6];

// arr.forEach(function (item) {
//   console.log(item);
// });

// const arr = [1, 2, 3, 4, 5, 6]; // [2, 4, 6, 8, 10, 12]

// const newArr = arr.map(function (item, index) {
//   return item * 2;
//   // return item % 2 !== 0;
// });

// console.log(newArr);

// const newArr = arr.filter((item, index) => item % 2 !== 0); "Priyanka" === "Priyanka"

// console.log(newArr);

// const arr = [1, 2, 3, 4];
// const arr = ["A", "B", "C", "D"];

// const newArr = arr.reduce(function (acc, item, index) {
//   return acc + item; // "ABCD"
// }, "");

// console.log(newArr);

//  Some And Every Method

// const arr = [1, 2, 3, 4, 5, 6];

// const newArr1 = arr.some((item) => item > 0);
// const newArr2 = arr.every((item) => item > 0);

// console.log(newArr1, newArr2);

//  Find Method

// const arr = ["Ball", "Cat", "Dog", "Apple"];

// const newArr = arr.find((item) => item === "Cat");
// const newArr = arr.indexOf((item) => item === "Cat");

// console.log(newArr);

// Chaining Methods
// const arr = [1, 2, 3, 4, 5, 6];

// const newArr = arr
//   .filter((item) => item > 2) // [4, 6, 8, 10, 12]
//   .map((item) => item * 2) // [2, 4, 6, 8, 10, 12]
// .filter((item) => item % 2 !==0) // [4, 6, 8, 10, 12]
//   .reduce((acc, currItem) => acc + currItem, 0);

// Lexical Scope Definition
// Lexical scope, also known as static scope, is a scoping mechanism where the accessibility of variables and functions is determined by their physical location in the source code. In essence, it means that inner functions have access to variables defined in their outer (or enclosing) functions, and this access is determined at compile time based on how the code is structured textually.

// Closure
// A closure in JavaScript is the combination of a function and the lexical environment within which that function was declared. This means that a closure gives a function access to its outer scope, even after the outer function has finished executing.

// console.log(newArr);
//  Call Apply Bind

// let name = {
//   firstname: "John",
//   lastname: "Doe",
//   getFullname: function (city, country) {
//     return console.log(
//       `${this.firstname} ${this.lastname} from ${city}, ${country}`
//     );
//   },
// };

// name.getFullname("New York", "USA");

// let name2 = {
//   firstname: "Marry",
//   lastname: "Doe",
// };

// // call Method function borrowing
// name.getFullname.call(name2, "New York", "USA");

// // Apply Method
// name.getFullname.apply(name2, ["New York", "USA"]);

// // Bind Method
// const marry = name.getFullname.bind(name2, "New York", "USA");

// marry();

// Flat and  Flatmap

// const arr = [1, 2, 3, 4, [5, 6, [7, 8]]];

// const flatArr = arr.flat(2);
// console.log(flatArr);

// const flatMapArr = arr.flatMap((item) => item * 2);
// console.log(flatMapArr);

// const flatArr = arr.flat(2);
// const flatArrMap = flatArr.map((item) => item * 2);
// console.log(flatArrMap);

// let arr = [2, 5, 1, 7, 6];

// // arr.sort();
// arr.sort((a, b) => a - b); // normal
// arr.sort((a, b) => b - a); //reverse

// console.log(arr);

// const x = new Array(7);
// x.fill(1);

// console.log(x);

// Casting (Type Conversion)

// const num = "10";
// console.log(2 + num); // string
// console.log(Number(num));
// console.log(2 + +num); // 12

// const string = 10;
// console.log(String(string));

// Parsing

// console.log(Number.parseInt("10px") + 2); // 12
// console.log(Number.parseFloat("2.5rem")); // 2.5

// console.log(Number.isInteger(num));
// console.log(Number.isFinite(23 / 0));

//  MATH Methods

// console.log(Math.sqrt(25)); // 5
// console.log(Math.max(5, 10, 15));
// console.log(Math.min(5, 10, 15));

// console.log(Math.PI);
// console.log(Math.E);
// console.log(Number.parseInt(Math.random() * 10)); // Float -> Int
// console.log(Math.trunc(Math.random() * 10)); // 23.7 -> 23
// console.log(Math.round(Math.random() * 10)); // 23.5 -> 24
// console.log(Math.ceil(23.4));
// console.log(Math.floor(23.4));

// console.log(Math.abs(-10));
// console.log((24.1236).toFixed(2)); // 24.12

// Dates

// console.log(new Date());

// const date = new Date();
// console.log(date.getDate());
// console.log(date.getMonth()); // Caution 0 - 11
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());

// console.log(date.toLocaleString());
// console.log(date.toISOString());

// const date2 = new Intl.DateTimeFormat("en-NP").format(date);

// console.log(date2);
