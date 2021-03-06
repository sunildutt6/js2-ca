import clearButton from "./components/clearButton.js";
import displayError from "./components/displayError.js";
import { menuCreator } from "./components/menuCreator.js";
import { getFromStorage } from "./utils/saveFunctions.js";

menuCreator();
clearButton();



export function getFavourite() {
  const buttonClear = document.querySelector("#clear");
  const favouritesProduct = getFromStorage();
  const productContainer = document.querySelector(".product-container");

  if (favouritesProduct.length === 0) {
    displayError(
      "pure",
      "ðYou don't have favourites selected.ð",
      ".product-container"
    );
    buttonClear.style.display = "none";
  }

  favouritesProduct.forEach((favourite) => {
    productContainer.innerHTML += `<div class="product">
                                <h3>${favourite.name}</h3>
                                <hr />
                                <p>Description: ${favourite.summary}</p>
                                <h4>Author: ${favourite.author}</p>
                                <i class= "fa fa-heart"></i>
                                </div>`;
  });
}
getFavourite();
