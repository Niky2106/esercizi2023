export const cE = (el) => document.createElement(el);

export const qS = (el) => document.querySelector(el);

export const formatDescriptionText = (str) =>
  str.split(" ").splice(0, 5).join(" ") + " ...";

export const createProduct = (data) => {
  const wrapperEl = cE("div");
  const textWrapperEl = cE("div");
  const imageEl = cE("img");
  const titleEl = cE("h3");
  const descriptionEl = cE("p");
  const ratingEl = cE("p");
  const priceEl = cE("h4");
  const buttonEl = cE("button");

  wrapperEl.className = "productCard";
  textWrapperEl.className = "productCard__text";
  imageEl.src = data.thumbnail;
  imageEl.alt = data.title;
  titleEl.textContent = data.title;
  descriptionEl.textContent = formatDescriptionText(data.description);
  ratingEl.textContent = data.rating;
  priceEl.textContent = data.price + " $";
  buttonEl.textContent = "Add to Cart";

  textWrapperEl.append(titleEl, descriptionEl, ratingEl, priceEl, buttonEl);

  wrapperEl.append(imageEl, textWrapperEl);

  return wrapperEl;
};

export const createProductModal = () => {
    const wrapperEl = cE("div");
    const galleryEl = cE('div');
    const mainIngEl = cE("img");
    const thunbWrapperEl = cE("div");
    const textEl = cE("div");
    const mainTextEl = cE("div");
    const mainTextTitleEl = cE("h1");
    const mainTextDescEl = cE("p");
    const mainTextRateEl = cE("p");
    const buytextEl = cE("div");
    const buyTextFirstBtnEl = cE("button");
    const buyTextSecondBtnEl = cE("button");


wrapperEl.className = "modalProduct";
galleryEl.className = "modalProduct__gallery";
textEl.className = "modalProduct__text";
mainIngEl.src = "productData.thunbmail"
mainIngEl.alt = "productData.title"

textEl.className = "modalproduct__text";
mainTextEl.className = "modalMainText";
mainTextTitleEl.textContent = "modalMainBuy";
mainTextDescEl.textContent = productData;
mainTextRateEl.textContent = ""




wrapperEl.append (galleryEl, mainIngEl);

return wrapperEl;
};



