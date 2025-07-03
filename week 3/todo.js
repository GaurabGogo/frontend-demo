const inputEl = document.getElementById("input");
const addBtn = document.getElementById("add");
const listEl = document.getElementById("list");

// document.createElement("div");
//  document.appendChild(div);

let arr = [];

addBtn.addEventListener("click", function () {
  const text = inputEl.value;
  if (text) {
    arr.push(text);
    const listItem = document.createElement("li");
    listItem.innerText = text;
    listEl.appendChild(listItem);
  }
});

const listItem = document.createElement("li");
listItem.innerText = "apple";
listEl.appendChild(listItem);
