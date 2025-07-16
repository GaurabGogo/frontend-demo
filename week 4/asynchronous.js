// const interval = setInterval(
//   () => {
//     console.log("Hello World");
//   },
//   2000,
//   "Asynchronous"
// );

// setTimeout(
//   () => {
//     clearInterval(interval);
//   },
//   10000,
//   "Asynchronous"
// );

// https://dummyjson.com/docs/products#products-all

const list = document.querySelector(".product-list");

const getProducts = function () {
  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      data.products.forEach((product) => {
        const li = document.createElement("li");
        const image = document.createElement("img");
        image.src = product.images[0];
        image.style.width = "100px";
        image.style.height = "100px";
        li.innerText = product.title;
        li.appendChild(image);
        li.style.border = "1px solid black";
        list.appendChild(li);
      });
    });
};

getProducts();
