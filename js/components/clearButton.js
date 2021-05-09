import createList from "./createList.js";
import { getFavourite } from "../favourites.js";

export default function clearButton() {
  const clearButton = document.querySelector("#clear");
  clearButton.addEventListener("click", clearAll);

  function clearAll() {
    if (confirm ("Are you sure to clear?")) {
      localStorage.clear();
      getFavourite();
    }
  }
}
