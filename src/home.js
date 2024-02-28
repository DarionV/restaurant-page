const renderHome = function () {
  const contentContainer = document.querySelector("#content");

  const heroContainer = document.createElement("div");
  heroContainer.classList.add("hero");

  const promoText = document.createElement("img");
  promoText.src = "src/images/promo.svg";
  promoText.height = 150;

  const promoImage = document.createElement("img");
  promoImage.src = "src/images/shake_01.png";
  promoImage.height = 400;
  promoImage.classList.add("rounded");

  heroContainer.appendChild(promoText);
  heroContainer.appendChild(promoImage);

  const promoContainer = document.createElement("div");
  promoContainer.classList.add("promo-container");
  const offerText = `<p>Order 1, get 5 free! Only today! (and every other day!!!)</p>`;
  promoContainer.innerHTML = offerText;

  contentContainer.appendChild(heroContainer);
  contentContainer.appendChild(promoContainer);
};

export { renderHome };
