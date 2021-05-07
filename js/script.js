import { baseUrl } from "./settings/api.js";
import createList from "./components/createList.js";
import displayError from "./components/displayError.js";
import searchData from "./components/searchData.js";

const url = baseUrl + "articles";

(async function (data) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    createList(data);
    searchData(data);
  } catch (error) {
    displayError(
      "error",
      "An error occured while fetching Api.",
      ".product-container"
    );
  }
})();


