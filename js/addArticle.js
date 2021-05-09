import displayError from "./components/displayError.js";
import { menuCreator } from "./components/menuCreator.js";
import { baseUrl } from "./settings/api.js";
import { getToken } from "./utils/saveFunctions.js";

menuCreator();

const form = document.querySelector("form");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const description = document.querySelector("#description");
const message = document.querySelector(".message-container");

form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();
    message.innerHTML = "";
    const titleValue = title.value.trim();
    const authorValue = author.value.trim();
    const descriptionValue = description.value.trim();
    if (titleValue.length === 0 || authorValue.length === 0 || descriptionValue.length === 0) {
        return displayError("warning","Please provide proper inputs",".message-container")
    }

    addArticles(titleValue,authorValue,descriptionValue)
}

async function addArticles(title, author, summary) {
    const url = baseUrl + "articles";
    const data = JSON.stringify({ title: title, author: author, summary: summary })
    const token = getToken();
    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
             Authorization: `Bearer ${token}`
        },
    }
    try {
        const response = await fetch(url, options);
        const json = await response.json();
        console.log(json)
        if (json.id) {
            displayError("success", "New article added to the list", ".message-container");
            form.reset()
        }
        if (json.error) {
            displayError("error", "You are not authorized", ".message-container");
        }
    }
    catch(error){
        console.log(error)
    }
}