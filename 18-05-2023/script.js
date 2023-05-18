import { cE, qS, createProduct, createProductModal, qSA, createCartModal } from "./utils/service.js";

// SYNC
let searchProductValue = "";
const rootEl = qS("#root");
const productList = cE("div");
const productListTitle = cE("h2");
const searchProductEl = qS(".searchInput")
export const cartEl = qS(".cart");
export const btnCart = qS(".btn_Cart")
// let searchProductValue = "";
let productListData = [];
export let cartItems = [];


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
                fetch(`https://dummyjson.com/products/${product.id}`)
                    .then((res) => res.json())
                    .then((data) => rootEl.append(createProductModal(data, rootEl)))

            )
        );
    });

// EVENTS
searchProductEl.addEventListener('input', (evt) => {
    // if (evt.target.value.length >= 3) {
    productList.textContent = "";

    productListData.filter((cartItems) =>
        product.description.toLowerCase().includes(evt.target.value.toLowerCase())
    )
        .forEach((obj) => productList.append(createProduct(obj)));
    // }
});