import { getFromStorage } from "../utils/saveFunctions.js";

const favourites = getFromStorage();

export default function createList(data) {
  const container = document.querySelector(".product-container");
  container.innerHTML = "";
  data.forEach(function (product) {
    let cssClass = "far";
    const isFavouriteExist = favourites.find(function (fav) {
      console.log(fav);
      return parseInt(fav.id) === product.id;
    });
    console.log(isFavouriteExist);
    if (isFavouriteExist) {
      cssClass = "fa";
    }

    container.innerHTML += `<div class=  "product">
                    <h3> ${product.title}</h3>
                    <hr>
                    <p>Description: ${product.summary}</p>
                    <h4 class= "mt-5 text-center">By: ${product.author}</h4>
                <i class="${cssClass} fa-heart " data-id= "${product.id}" data-name="${product.title}" data-summary= "${product.summary}" data-author = "${product.author}"></i>
            </div>`;
  });
  const favButton = document.querySelectorAll(".product i");
  favButton.forEach(function (button) {
    button.addEventListener("click", handelClick);
  });
  function handelClick() {
    this.classList.toggle("fa");
    this.classList.toggle("far");
    const id = this.dataset.id;
    const name = this.dataset.name;
    const author = this.dataset.author;
    const summary = this.dataset.summary;
    const currentFavs = getFromStorage();
    const itemExists = currentFavs.find(function (fav) {
      return fav.id === id;
    });
    if (!itemExists) {
      const item = { id: id, name: name, summary: summary, author: author };
      currentFavs.push(item);
      saveToStorage(currentFavs);
    } else {
      const newFavs = currentFavs.filter((fav) => fav.id !== id);
      saveToStorage(newFavs);
    }
  }
}
function saveToStorage(favs) {
  localStorage.setItem("favourites", JSON.stringify(favs));
}
