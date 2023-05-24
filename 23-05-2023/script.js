import { GET, POST, DELETE } from "./utils/http.js";
import { createEl, productGen } from "./utils/fn.js";



// GET().then((data) => console.log(data));


POST("/products/add", {
    title: "Chi sei ?",
});

DELETE("/products/1");

POST("/products/add", {
    title: "Qualcosa di bello",
});

DELETE("/products/2");


POST("/products/add", {
    title: "Ciao",
});

DELETE("/products/3");


POST("/products/add", {
    title: "helllo",
});

DELETE("/products/4");

const bodyEl = document.querySelector("body");
const wrapperEl = createEl("div", "", { name: "class", value: "cartList" });
const userId = 2;

bodyEl.append(wrapperEl);

GET(`/carts/${userId}`).then((data) =>
    data.products.forEach((product) => wrapperEl.append(productGen(product)))
);

