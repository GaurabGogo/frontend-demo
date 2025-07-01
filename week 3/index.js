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

const box = document.getElementsByClassName("box")[0];
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  box.classList.toggle("active");
});

document.addEventListener("keyup", function (e) {
  if (e.key === "a") {
    box.classList.toggle("active");
  }
});
