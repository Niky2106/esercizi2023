const productsURL = 'https://dummyjson.com/products';

// Fetch products data from the URL
fetch(productsURL)
  .then(response => response.json())
  .then(data => {
    const products = data.slice(0, 10); // Get first 10 products

    displayProducts(products);
    addAddToCartEventListeners();
  })
  .catch(error => console.log(error));

// Function to display products on the page
function displayProducts(products) {
  const productContainer = document.getElementById("product-list");
  productContainer.innerHTML = "";

  products.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.className = "product";
    productDiv.innerHTML = `
      <img src="${product.thumbnail}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p>${product.description}</p>
      <p>Price: $${product.price}</p>
      <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
    `;
    productContainer.appendChild(productDiv);
  });
}

// Function to add event listeners to Add to Cart buttons
function addAddToCartEventListeners() {
  const addToCartButtons = document.getElementsByClassName("add-to-cart");
  for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener("click", addToCart);
  }
}

// Function to handle Add to Cart button click
function addToCart(event) {
  const productId = event.target.getAttribute("data-id");
  const product = products.find(item => item.id === parseInt(productId));

  if (product) {
    const cartCountElement = document.getElementById("cart-count");
    let cartCount = parseInt(cartCountElement.innerText);
    cartCount++;
    cartCountElement.innerText = cartCount;
  }
}