import {
  cE, qS, createProduct, createProductModal
}
  from "./utils/service.js"


const productsURL = 'https://dummyjson.com/products';

const productList = qS("#product-list");
fetch(productsURL)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    data.products.forEach(product => {

      productList.append(createProduct(product))
    });

  })
  .catch(error => console.log(error));

// fetch("https://dummyjson.com/products")
//   .then((res) => res.json())
//   .then((data) => {
//     data.products.forEach((product) =>
//       productList.append(createProduct(product))
//     );
//   })
//   .then(() => {
//     const productCardEls = qSA(".productCard");

//     productCardEls.forEach((product) =>
//       product.addEventListener("click", () => {
//         fetch(`https://dummyjson.com/products/${product.id}`)
//           .then((res) => res.json())
//           .then((data) => {
//             const modal = createProductModal(data, rootEl);
//             const closeButton = cE("button");
//             closeButton.textContent = "Close";
//             closeButton.addEventListener("click", () => {
//               modal.remove();
//             });
//             modal.appendChild(closeButton);
//             rootEl.append(modal);
//           });
//       })
//     );
//   });