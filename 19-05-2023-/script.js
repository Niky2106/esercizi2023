import {
    cE,
    qS,
    qSA,
    createProduct,
    createProductModal,
    createCartModal,
    createLogIn,
} from "./utils/fn.js";

// SYNC
export const rootEl = qS("#root");
export const productList = cE("div");
export const productListTitle = cE("h2");
export const searchProductEl = qS(".searchInput");
export const cartEl = qS(".cart");
export const navbarEl = qS(".navbar");
export const heroEl = qS(".hero");
export let productListData = [];
export let cartItems = [];

productList.className = "productList";
productListTitle.textContent = "Products for you!";
rootEl.append(productListTitle, productList);
navbarEl.style.display = "none";
heroEl.style.display = "none";


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

cartEl.addEventListener("click", () => {
    rootEl.append(createCartModal(cartItems, rootEl));
    const cartModal = qS(".cartModal");

    cartEl.disabled = true;
    cartModal.classList.add("cartModal__active");
});