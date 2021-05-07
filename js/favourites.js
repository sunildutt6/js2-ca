import clearButton from "./components/clearButton.js";
import { getFromStorage } from "./utils/saveFunctions.js";

clearButton();

  const favouritesProduct = getFromStorage();
  const productContainer = document.querySelector(".product-container");

if (favouritesProduct.length === 0) {
    productContainer.innerHTML = "😔You don't have favourites selected.😔";
  }
  favouritesProduct.forEach((favourite) => {
    productContainer.innerHTML += `<div class="product">
                                <h3>${favourite.name}</h3>
                                <p>Description: ${favourite.summary}</p>
                                <h4>By: ${favourite.author}</p>
                                <i class= "fa fa-heart"></i>
                                </div>`;
  });

