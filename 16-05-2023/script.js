import { cE, qS, createProduct, createProductModal, qSA } from "./contacts/service.js";

// SYNC
let searchProductValue = "";
let productListData = [];
const rootEl = qS("#root");
const productList = cE("div");
const productListTitle = cE("h2");
const searchProductEl = qS(".searchInput")

productList.className = "productList";
productListTitle.textContent = "Products for you!";
rootEl.append(productListTitle, productList);



// // ASYNC

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    productListData = data.products
    productListData.forEach((product) =>
      productList.append(createProduct(product))
    );
  })
  .then(() => {
    const productCardEls = qSA(".productCard");

    productCardEls.forEach((product) =>
      product.addEventListener("click", () =>
        fetch(`https://dummyjson.com/products/${product.title}`)
          .then((res) => res.json())
          .then((data) => rootEl.append(createProductModal(data, rootEl)))
      )
    );
  });

// EVENTS
searchProductEl.addEventListener('input', (evt) => {
  // if (evt.target.value.length >= 3) {
  productList.textContent = "";

  productListData.filter((product) =>
    product.description.toLowerCase().includes(evt.target.value.toLowerCase())
  )
    .forEach((obj) => productList.append(createProduct(obj)));
  // }
});

searchProductEl.addEventListener("input", (evt) => {
  productList.textContent = "";
  searchProductValue = evt.target.value.toLowerCase();

  productListData
    .filter((product) =>
      product.description.toLowerCase().includes(searchProductValue)
    )
    .forEach((obj) => productList.appendChild(createProduct(obj)));
});
