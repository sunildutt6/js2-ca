import displayError from "./components/displayError.js";
import { menuCreator } from "./components/menuCreator.js";
import { baseUrl } from "./settings/api.js";
import { getToken } from "./utils/saveFunctions.js";
import deleteArticles from "./components/deleteArticles.js"
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
menuCreator();

if (!id) {
  document.location.href = "/";
}
const articleUrl = baseUrl + "articles/" + id;

const form = document.querySelector(".edit");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const description = document.querySelector("#description");
const message = document.querySelector(".message-container");
const loader = document.querySelector(".spinner-border");
const idInput = document.querySelector("#id");

console.log(loader);

(async function () {
  try {
    const response = await fetch(articleUrl);
    const json = await response.json();
    title.value = json.title;
    author.value = json.author;
    description.value = json.summary;
    idInput.value = json.id;

    deleteArticles(json.id)
  } catch (error) {
    console.log(error);
  } finally {
    loader.style.display = "none";
    form.style.display = "block";
  }
})();

form.addEventListener("submit", submitForm);
function submitForm(event) {
  event.preventDefault();
  message.innerHTML = "";
  const titleValue = title.value.trim();
  const authorValue = author.value.trim();
  const descriptionValue = description.value.trim();
  if (
    titleValue.length === 0 ||
    authorValue.length === 0 ||
    descriptionValue.length === 0
  ) {
    return displayError(
      "warning",
      "Please provide proper inputs",
      ".message-container"
    );
  }
  updateArticle(titleValue, authorValue, descriptionValue);
}
async function updateArticle(title, author, summary) {
  const url = baseUrl + "articles/" + id;
  const data = JSON.stringify({
    title: title,
    author: author,
    summary: summary,
  });
  const token = getToken();
  const options = {
    method: "PUT",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(url, options);
    const json = await response.json();

    if (json.published_at) {
      displayError(
        "success",
        "Article successfully updated",
        ".message-container"
      );
      //   location.href = "/";
    }
    if (json.error) {
      displayError("error", "You are not authorized", ".message-container");
    }
  } catch (error) {
    console.log(error);
  }
}
