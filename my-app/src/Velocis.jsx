import React, { useEffect } from "react";

const arr = [
  {
    label: "id",
    value: "123",
  },
  {
    label: "name",
    value: "John",
  },
  {
    label: "address",
    value: "New York",
  },
];

function Velocis(props) {
  const { title, age, var2, toggle } = props;
  const [products, setProducts] = React.useState([]);

  useEffect(() => {
    // Dom content Loaded
    // console.log("DOM content Loaded");
    // const span = document.getElementsByTagName("span");
    // console.log(span);

    const response = fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, [var2, title, age]);

  console.log(products);

  return (
    <div>
      <span>{title}</span> <span>{age}</span>
      <button onClick={toggle}>Toggle</button>
      {var2 && <span>Happy Hacking</span>}
      {arr.map((item, index) => {
        return (
          <div key={index}>
            {item.label}: {item.value}
          </div>
        );
      })}
      {products.map((item, index) => {
        return (
          <div key={index} className="product-item">
            {item.title}
          </div>
        );
      })}
    </div>
  );
}

export default Velocis;
