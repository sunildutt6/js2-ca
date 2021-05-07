import createList from "./createList.js";

export default function clearButton() {
  const clearButton = document.querySelector("#clear");
  clearButton.addEventListener("click", clearAll);

  function clearAll() {
    localStorage.clear();
    createList();
  }
}
