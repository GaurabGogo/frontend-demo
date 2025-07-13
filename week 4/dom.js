// const body = document.body;

// const paragraph = document.createElement("p");
// paragraph.innerText = "Hello World";
// body.appendChild(paragraph);

// HEAD, BODY, HTML

// document.getElementsByTagName("head");
// document.getElementsByTagName("body");
// document.getElementsByTagName("html");

// console.log(document.head);
// console.log(document.body);
// console.log(document.documentElement);

// document.getElementById("heading");
// document.getElementsByTagName("h1");
// document.getElementsByClassName("class-heading");

// console.log(document.querySelector("#heading"));
// console.log(document.querySelector(".class-heading"));
// console.log(document.querySelectorAll(".class-heading"));  // Hello World
// const el = document.querySelector('[data-id="heading"]');

// document.createElement("p"); // Creaing Elements

// TEXT

// document.createElement("p").innerText = "Hello World";
// document.createElement("p").textContent = "Hello World";

// HTML

// document.createElement("p").innerHTML = "Hello World";

// Append and Prepend
// const h1 = document.getElementById("heading");

// h1.prepend("Hi");
// h1.append("Hi");

// h1.before("Hi");
// h1.after("Hi");

// h1.remove(); // Remove

// const span = document.querySelector("span");
// console.log(span.parentElement); // Parent Element

// insertAdjacentHTML
// const h2 = document.querySelector("h2");

// h2.insertAdjacentHTML("beforebegin", "<span>1</span>");
// h2.insertAdjacentHTML("afterbegin", "<span>2</span>");
// h2.insertAdjacentHTML("beforeend", "<span>3</span>");
// h2.insertAdjacentHTML("afterend", "<span>4</span>");

// STYLES

// const h1 = document.querySelector("h1");
// h1.style.backgroundColor = "red";
// h1.style.fontFamily = "Arial";
// h1.style.fontSize = "20px";
// h1.style.color = "white";
// h1.style.setProperty("background-color", "blue");

// ATTRIBUTES

// console.log(h1.id); // getAttribute
// console.log(h1.classList); // getAttribute
// console.log(h1.className);
// console.log(h1.dataset.id); // getAttribute
// console.log(h1.getAttribute("id")); // getAttribute

// h1.setAttribute("data-id2", "heading");

// ClassList

// const h2 = document.querySelector("h2");
// h2.classList.add("active");
// h2.classList.remove("active");
// h2.classList.toggle("active");
// const result = h2.classList.contains("active");
// console.log(h2.classList); // getClassList
// console.log(result);

// Bounding Client Rect
// const body = document.body;
// const rect = body.getBoundingClientRect();
// const bodyHeight = body.clientHeight;
// const bodyWidth = body.clientWidth;
// console.log(rect, bodyHeight, bodyWidth);
