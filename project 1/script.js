const productCardTemplate = `<div class="product-card">
              <img src="{{img}}" alt="Product" />
              <div class="product-card__content">
                <h3>{{name}}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, voluptate.</p>
                <span>$ {{price}}</span>
                <div class="product-card__btns">
                  <button class="btn primary-btn small-btn">Add to Cart</button>
                  <button class="btn secondary-btn small-btn">Add to Wishlist</button>
                </div>
            </div>
          </div>`;

const productList = document.querySelector(".products__list");
const limitSelect = document.querySelector("#limit");
const categorySelect = document.querySelector("#category");

const categories = new Set();

function fetchAllCategories() {
  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => {
      data.products.map((product) => categories.add(product.category));

      categories.forEach((category) => {
        let option = document.createElement("option");
        option.value = category;
        option.innerText = category;
        categorySelect.appendChild(option);
      });
    });
}

function fetchAllProducts() {
  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => {
      productList.innerHTML = "";

      data.products
        .filter((product) => product.category === categorySelect.value)
        .slice(0, limitSelect.value)
        .map((product) => {
          let productCard = productCardTemplate
            .replaceAll("{{img}}", product.images[0])
            .replaceAll("{{name}}", product.title)
            .replaceAll("{{price}}", product.price);

          productList.insertAdjacentHTML("beforeend", productCard);
        });
    });
}

fetchAllCategories();
fetchAllProducts();

limitSelect.addEventListener("change", (e) => {
  fetchAllProducts();
});

categorySelect.addEventListener("change", (e) => {
  fetchAllProducts();
});
