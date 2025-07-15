// function handleClick(event) {
//   console.log("Clicked");
// }

// const parent = document.querySelector(".parent");
// const children = document.querySelectorAll(".child");

// parent.addEventListener("click", function (event) {
//   // console.log(event);

//   if (event.target.id === "1") {
//     console.log("Child Clicked 1");
//     event.target.style.backgroundColor = "blue";
//   } else if (event.target.id === "2") {
//     console.log("Child Clicked 2");
//     event.target.style.backgroundColor = "yellow";
//   } else if (event.target.id === "3") {
//     console.log("Child Clicked 3");
//     event.target.style.backgroundColor = "orange";
//   }
// });

// children.forEach((child, index) => {
//   child.addEventListener("click", function (event) {
//     event.stopPropagation();
//     console.log("Child Clicked " + Number(index + 1));
//   });
// });
